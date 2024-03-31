const mongodb = require('mongoose'); // importing mongoDB to my app

mongodb.connect('mongodb://localhost:27017/dataRelationshipsDemo',{useNewUrlParser: true})
.then(()=>{
    console.log("DataBase connection is open")
})
.catch(error =>{
    console.log('Connection interrupted')
    console.log(error)
})


// creating  a data schema for a user

const userSchema = new mongodb.Schema({
    first: String,
    last: String,
    address:[{ 
        _id: {id: false},                     // we have first and last names for the user
        street: String,                        // city, state and country are chained inside address as 
        city: String,               
        state: String,
        country:String
    }]
})

// validating the model

const User = mongodb.model('User', userSchema);

// defining a function that creates a new user

const newUser = async() =>{
    const u = new User({
        first:'Vagner',
        last: 'Alves'
    })
    u.address.push({
        street: 'Avenue des Champs-Élysées.',
        city: 'Paris',
        state:' Île-de-France region',
        country:'France'

    })
    const res = await u.save()
    console.log(res)
}

// creating an address function, just to add more of them.

const addAddress = async(id) => {
    const user = await User.findById(id);
    user.address.push({
        street: 'sea front',
        city: 'sydney',
        state:' weat region',
        country:'Australia'

    })
    const res = await user.save()
    console.log(res)
}

addAddress("639254ed2d4ff4f432e78f22");


