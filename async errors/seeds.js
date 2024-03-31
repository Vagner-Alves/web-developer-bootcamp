const mongoose = require('mongoose');

const Product = require('./model/product');

mongoose.connect('mongodb://localhost:27017/farmStand2', {useNewUrlParser:true})
    .then(()=>{
        console.log("MONGO IS READY")
    })
    .catch(err=>{
        console.log("OH CONNECTION ERROR")
        console.log(err)
    })

    // const p = new Product({ those have already been added to the database
    //     name:'Melon',
    //     price:0.99,
    //     category:'fruit'
    // })

    const seedProducts = [
        {
            name:'Ruby grapeFruit',
            price: 0.45,
            category:'fruit'
        },
        {
            name:'Chocolate whole milk',
            price: 5.64,
            category:'dairy'
        },
        {
            name:'Strawberry',
            price:0.70,
            category:'fruit'
        },

        {
            name:'avocado',
            price: 1.01,
            category:'fruit'
        },

        {
            name:'mango',
            price:2.00,
            category:'fruit'
        },
        {
            name:'cheddar',
            price:8.18,
            category:'dairy'
        },

        {
            name: 'tomato',
            price: 2.00,
            category:'vegetable'
        },

        {
            name:'eggplant',
            price: 4.12,
            category:'vegetable'
        },
        {
            name:'brocolli',
            price:6.12,
            category:'vegetable'
        }
    ]

    Product.insertMany(seedProducts)
    .then( res =>{
        console.log(res)
    }).catch(err =>{
        console.log(err)
    })