const express = require('express'); // importing the express app for my back-end bidding
const app = express(); // using express as a constant app.
const AppError = require('./AppError');

// import our middleware (morgan)
const morgan = require('morgan');

app.use(morgan('common')) // app.use :it allows to use special functions such middleware's

const passwordVerifier = (request, response,next)=>{
    const {password} = request.query; // this is how we can get the query string 
    if(password === '8189'){
        console.log('Correct Password, you Can Pass')
        next()
    }
  
    throw new AppError('This route is blocked, you need a password', 401)
}

// duplicating the code below ( for testing the middleware reasons)
app.get('/',(request, response)=>{
    console.log(`The time of the request is ${request.timeString}`)
    response.send('HOME PAGE')
})

app.use('/error', (request, response)=>{
    fish();
})

// defining a simple route to our website 
app.get('/corn', passwordVerifier,(request, response)=>{
    console.log(`The time of the request is ${request.timeString}`)
    response.send('Nothing to Show here...')

})

app.get('/admin', (request, response) =>{
    throw new AppError('You are not an admin', 403)
})

//defining a 404 route , when any of the routes above are match by the user
app.use((request, response)=>{
    response.status(404).send('NOT FOUND');
});

// defining and Error handler  middleware ( custom)


// defining the server opening port
app.listen(3000,()=>{
    console.log('sever up and running on the port 3000')
})