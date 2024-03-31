const express = require('express');
const app =  express()
const shelterRoutes = require('./routes/shelter');
const birds = require('./routes/birds');

const adminRoute = require('./routes/admin');

app.use('/shelters', shelterRoutes);
app.use('/birds', birds)
app.use('/admin', adminRoute);
app.listen(3000, ()=>{
    console.log('Web Server up on the port 3000')
})
