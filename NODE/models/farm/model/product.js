const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        min:0
    },
    category:{
        type: String,
        lowercase:true,
        enum: ['fruit','vegetable','dairy']
    },
    farm:{
        type: Schema.Types.ObjectId, ref: 'Farm'
    }
})

const Product = mongoose.model('Product', productSchema);// create the schema within mongo database

const makeProduct = async()=>{
    const p = {name:'melancia', price:3, category:'fruit'}
}

module.exports = Product; // 