const express = require('express');
const app = express();
const session = require('express-session');
const sessionOptions = {secret:'IsNotGoodKey', resave:false, saveUninitialized:false}
let x = 0

app.use(session(sessionOptions));

app.get('/pageviews',(req, res)=>{
    if (req.session.count){
        x = req.session.count+=1;
    }else{
         x= req.session.count = 1;
    }
    res.send(`This page has been viewed ${x} Times!`)
})

app.get('/register', (req, res)=>{
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
    res.redirect('/greet')
})

app.get('/greet', (req, res)=>{
    const {username} = req.session;
    res.send(`welcome back, ${username}`)
})

app.listen(3000, ()=>{
    console.log('Session server is up on port 3000')
})