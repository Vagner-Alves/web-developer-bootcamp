const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('All birds');
})

router.get('/:id', (req, res)=>{
    res.send('One bird, look at it!');
})

router.post('/', (req, res)=>{
    res.send('adding a new kind of bird');
})

module.exports = router;