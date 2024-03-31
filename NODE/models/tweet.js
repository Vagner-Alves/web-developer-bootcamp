const mongodb = require('mongoose');
const Schema = mongodb.Schema;
mongodb.connect('mongodb://localhost:27017/dataRelationshipsDemo',{useNewUrlParser: true})
.then(()=>{
    console.log('DataBase Connected')
}).catch(err=>{
    console.log(err)
})

const userSchema = new Schema({
    username: String,
    age: Number,
    
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref:'User'}

})

const farmSchema = new Schema({
    name: String,
    city: String,
    products:[{type: Schema.Types.ObjectId,ref:'product'}]

})

const User = mongodb.model('User', userSchema);
const Tweet = mongodb.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     //const user = new User({username:'batata98', age:19});
//     const user = await User.findOne({ username: 'batata98' })
//     const tweet2 = new Tweet({ text: 'Com coca Cola!', likes: 9999 })
//     tweet2.user = user;
//     user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () =>{
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet()