const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./model/product');
const Farm = require('./model/farm');

mongoose.connect('mongodb://localhost:27017/dataRelationshipsDemo', {useNewUrlParser:true})
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

// Farm routes
app.get('/farms', async(req, res)=>{
    const farms = await Farm.find({});
    res.render('farms/index', {farms})
})
app.get('/farms/new', (req, res)=>{
    res.render('farms/new')
})

app.get('/farms/:id', async(req, res)=>{
    const farm = await Farm.findById(req.params.id);
    res.render('farms/show', {farm})
})

app.post('/farms', async(req, res)=>{
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms')
})

app.get('/farms/:id/products/new', (req, res)=>{
    const {id} = req.params;
    res.render('products/new', {categories, id})
})

app.post('/farm/:id/products', (req, res)=>{
    res.send(req.body)
})

app.get('/products', async(req, res)=>{
    const {category} = req.query;
    if(category){
        const products = await Product.find({category});
        res.render('products/index', {products, category});

    }else{
        const products = await Product.find({});
        res.render('products/index', {products, category:'a'})

    }
   
})

app.get('/products/new', (req, res) =>{
    res.render('products/new', {categories})
})

app.post('/products', async(req, res)=>{
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`);
})

app.get('/products/:id', async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findById(id)
    res.render('products/show', {product})
})

app.get('/products/:id/edit', async(req, res) =>{
    const {id} = req.params;
    const product = await Product.findById(id)
    
    res.render('products/edit',{product, categories})
})

app.put('/products/:id', async(req, res)=>{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators:true, new:true});
    res.redirect(`/products/${product._id}`);
})

app.delete('/products/:id', async(req, res)=>{
    const{id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000, () =>{
    console.log('THE SERVER IS OPEN ON THE PORT 3000')
}) 