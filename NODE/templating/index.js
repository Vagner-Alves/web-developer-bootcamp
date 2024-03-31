const express = require('express');
const { get } = require('http');
const app = express();
const path = require('path');
const redditData = require('./data.json');

// setting the middleware 
app.use(express.static(path.join(__dirname,'public')));



// configuring ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')); // this allow me to work with express in another directories

// defining a simple route 
app.get('/',(req,res) =>{
    res.render('home.ejs')
});

app.get('/cats',(req,res) =>{
    cats = ['kinha', 'paçoca','thor',
    'jujuba',  'lua'
    
    ]

    res.render('cats', {cats})
})


app.get('/r/:subreddit',(req, res)=>{
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    
    if(data){
        res.render('subreddit',{...data}); // a little bit of error handling
    } else{
        res.render('notFound', {subreddit})
    }

    
})

app.get('/rand',(req,res)=>{
    const number = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs',{num: number});
    // whatever number is will be available on my random.ejs tamplate, under the name of randomNumber.
})

// opening a port in the express server
app.listen(3000, ()=>{
    console.log("Listening on the port 3000!")
})