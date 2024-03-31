const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const AppError = require('./AppError');

const Product = require('./model/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser:true})
    .then(()=>{
        console.log("MONGO IS READY")
    })
    .catch(err=>{
        console.log("OH CONNECTION ERROR")
        console.log(err)
    })

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

const categories =['fruit','vegetable','dairy','other'];

// to prevent using try and catch in every async function below
// I'm goint to wrap them up on the function below which is going to give me the same result

function wrapAsync(ex){
    return function(req, res, next){
        ex(req, res, next).catch(error => next(error));
}
}

app.get('/products', wrapAsync(async(req, res, next)=>{
    
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', {products, category});
    }else{
        const products = await Product.find({});
        res.render('products/index', {products, category:'a'})
    
        } 
    
}));

app.get('/products/new', (req, res) =>{
    res.render('products/new', {categories})
});  

app.post('/products',wrapAsync( async(req, res, next)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
     
}));

app.get('/products/:id',wrapAsync(async(req, res, next)=>{
    const {id} = req.params;
    const product = await Product.findById(id)          // I could use if & else, but return gives the same result with a cleaner syntax!
    if(!product){
        throw new AppError('Product not found', 401);
        }
    res.render('products/show', {product})    
}));

app.get('/products/:id/edit', wrapAsync(async(req, res, next) =>{
    
    const {id} = req.params;
    const product = await Product.findById(id)
    if(!product){
        return next( new AppError('Product not found', 401));
    }
    res.render('products/edit',{product, categories})
}));

app.put('/products/:id', wrapAsync(async(req, res, next)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
    res.redirect(`/products/${product._id}`);
}));

app.delete('/products/:id',wrapAsync(async(req, res, next)=>{
    const{id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');      
}));

const ValidationErrorHandler = err =>{
    console.log(err);
    return new AppError(`Validation failed... ${err.message}`,400);
}

app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === 'ValidationError') err = ValidationErrorHandler(err)
    next(err);
})

app.use((err,req, res, next)=>{
    const {status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
});

app.listen(3000, () =>{
    console.log('THE SERVER IS OPEN ON THE PORT 3000')
});