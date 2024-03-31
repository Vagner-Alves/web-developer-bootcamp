const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser('thisismysecret'));

app.get('/home', (req, res)=>{
    const {name = 'no-name'} = req.cookies;
    res.send(`Hello, ${name}`)
})

app.get('/setName', (req, res)=>{
    res.cookie('name', 'biscoito do vagner');
    res.cookie('animal', 'paçoca melhor cachorro');
    res.send('Now I inserted a cookie into you! HAHAHAH')
})

app.get('/signedCookie', (req, res)=>{
    res.cookie('name', '01010111101', {signed:true});
    res.send('Ok your cookie is pretty much signed')
})

app.get('/verifyCookie', (req, res)=>{
    console.log(req.cookie);
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})
app.listen(3000,()=>{
    console.log('Cookie server is running')
})