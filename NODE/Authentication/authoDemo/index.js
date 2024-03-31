const express = require('express');
const app = express();
const mongoose = require('mongoose')
const User = require('./models/user');
const bcrypt = require('bcrypt');
const session = require('express-session');


// conneting to mongodb

mongoose.connect('mongodb://localhost:27017/authDemo',{useNewUrlParser: true}).then(()=>{
    console.log('Mongo is connected')
})
.catch(err =>{
    console.log('Connection error')
    console.log(err)
})

// setting the view engine for dinamic templating
// as long with the views directory to render the ejs templates
app.set('view engine', 'ejs');
app.set('views', 'views')

// using sessions to store data in cookies and allow user to be logged in
app.use(express.urlencoded({extended:true}));
app.use(session({secret:'notGood'}))

app.use(express.urlencoded({extended:true}));
// the routes of our "application"

// adding a require login middleware
const requireLogin  = (req, res, next)=>{
    
    if(! req.session.user_id){
        res.redirect('/login')
    }
    next();
}

app.get('/', (req, res)=>{
    res.send('Welcome Home')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login',async (req, res)=>{
    const {username, password} = req.body;
    const foundUser = await User.findAndValidate(username, password);

    if(foundUser){
        // if we succesfully log in we're gonna store the data in the session below
        req.session.user_id = foundUser._id
        res.redirect('/secret')
    }else{
        res.redirect('/login')
    }

})

app.get('/register', (req, res)=>{
    res.render('register')
})

// this post route will take the data
// from the html form and hash the password using bcrypt and then save into the dataBase ( mongoDB)
app.post('/register', async(req, res)=>{
    const {password, username} = req.body;
    const user = new User({username,password})
    await user.save();
    req.session.user_id = user._id
    res.redirect('/')
})

app.post('/logout', (req, res)=>{
    //req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
})

app.get('/secret',requireLogin, (req, res)=>{
   
    res.render('secret')
})
app.get('/topSecret', requireLogin, (req, res)=>{
    res.send('Top Secret route')
})

// the port where our server will be running
app.listen(3000, ()=>{
    console.log('App running on the port 3000')
})