const express = require('express');

const app = express();

// app.use((req, res)=>{
//     console.log('A new request has been received!');
//     res.send({color:'blue'});
// })

app.get('/test',(req, res)=>{

    res.send('Testing my First Express App');
})

app.get('/r/:subreddit', (req,res) =>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} SubReddit!!</h1>`)
})

app.get('/r/:subreddit/:postId', (req,res) =>{
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing the Post Id: ${postId} on the SubReddit ${subreddit} </h1>`)
})

app.get('/abacate',(req,res)=>{
    res.send('<img src="https://st.depositphotos.com/1006597/3101/i/950/depositphotos_31011255-stock-photo-avocado.jpg" alt="W3Schools.com"></img>');
})

app.get('/search', (req,res) =>{
    const {q} = req.query;
    if(!q){
        res.send('Nothing found :(')
    }
    res.send(`<h1>search results for: ${q} </h1>`)
})


app.get('*' ,(req, res) =>{
    res.send('THis page does not exist unfortunately....');
}) // the function above will work to any other page that the user requests that's not exists in the server
// this get request (catch all) should be put on the bottom!

app.listen(8080, ()=>{
    console.log('listening on this port 8080 this time :)');
})