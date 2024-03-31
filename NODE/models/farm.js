const mongodb = require('mongoose');

mongodb.connect('mongodb://localhost:27017/dataRelationshipsDemo', {useNewUrlParser: true})
.then(()=>{
    console.log('Connected to the dataBase')
})
.catch(err =>{
    console.log('we have an error')
    console.log(err)
})

// we have our product schema down below
const productSchema = new mongodb.Schema({
    name: String,
    price: String,
    season:{
        type: String,
        enum:['spring','winter','fall','summer']
    }
})

const farmSchema = new mongodb.Schema({
    name: String,
    city: String,
    products:[{type: mongodb.Schema.Types.ObjectId,ref:'product'}]

})

const Product = mongodb.model('product', productSchema);
const Farm = mongodb.model('farm', farmSchema);

const makeFarm = async()=>{
    const farm = new Farm({name:'Fazenda solar',city:'rio grande do sul, BR'});
    const uva = await Product.findOne({name:'uva preta'});
    farm.products.push(uva);
    await farm.save();
    console.log(farm)
}

//makeFarm()
//product.insertMany([
    //{name:'uva preta',price:0.25, season:'winter'},
    //{name:'limão siciliano', price:1.00, season:'summer'},
    //{name:'melancia comum', price:5.60, season:'spring'},
    //{name:'maçã', price:2.00, season:'fall'}
//])

// now lets create a farm schema for our data


const addProduct = async() =>{
    const farm = await Farm.findOne({name:'Fazenda solar'});
    const watermelon = await Product.findOne({name:'melancia comum'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}


Farm.findOne({name:'Fazenda solar'})
.populate('products')
.then(farm=>console.log(farm))