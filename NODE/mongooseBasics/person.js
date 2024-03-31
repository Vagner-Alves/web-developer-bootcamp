const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('Connection established!!')
    })
    .catch(error =>{
        console.log('we have an error')
        console.log(error)
    })

const personSchema = mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function(){
    console.log("JUST SAVED!!!")
})

personSchema.post('save', async function(){
    console.log("JUST SAVED!!")
})

const Person = mongoose.model('Person', personSchema);