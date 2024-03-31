const express = require('express');
const router = express.Router();

// this is going to mimic a web app that has administrator features
router.use((req, res, next)=>{
    if(req.query.isAdmin){
        next();
    }
    res.send("Sorry , you dont have permission to this")
})

router.get('/topSecret', (req, res)=>{
    res.send('ONlY ADMINS ARE AUTHORIZED TO ACCESS THIS ROUTE');
})

router.get('/delete', (req, res)=>{
    res.send('Delete all data on the applications dataBase')
})

module.exports = router;
