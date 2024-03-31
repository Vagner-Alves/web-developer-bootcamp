const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Connection established!!')
    })
    .catch(error =>{
        console.log('we have an error')
        console.log(error)
    })

    // creating the data schema for the app

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price:{
        type: Number,
        required: true,
        min: [0, 'price must be positive!']
    },
    onSale:{
        type: Boolean,
        default: true
    },
    category:[String],

    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type: Number,
            default:0
        }
    },
    size:{
        type: String,
        enum:['S','M','L']
    }

});


// productSchema.methods.greet = function() {
//     console.log('HEllo Im a product')
//     console.log(` -- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.category.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale: true, price:0})
}

const Product = mongoose.model('Product',productSchema);
//const bike = new Product({name:'Circlying Jersey',price:125, onSale:true, category:['Cycling'], size:'M'});

const findProduct = async () =>{
    const foundProduct = await Product.findOne({name:'Bike helmet'})
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('outDoors')
    console.log(foundProduct);

}

Product.fireSale().then( res => console.log(res))


//  bike.save()
//      .then(data =>{
//          console.log("IT WORKED")
//          console.log(data)
//      })
//      .catch(err =>{
//          console.log("ERROR, PLEASE READ THE FALLOWING MESSAGE")
//          console.log(err)
//      })

// Product.findOneAndUpdate({name:'Tire Pump'}, {price: -15}, {new:true, runValidators:true})
// .then(data =>{
//     console.log("IT WORKED")
//     console.log(data)
// })
// .catch(err =>{
//     console.log("ERROR, PLEASE READ THE FALLOWING MESSAGE")
//     console.log(err)
// })