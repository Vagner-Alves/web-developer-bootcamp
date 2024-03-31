const express = require('express');

const router = express.Router();


router.get('/', (req, res)=>{
    res.send('All shelters');
})

router.post('/', (req, res)=>{
    res.send('creating a new shelter')
})

router.get('/:id', (req, res)=>{
    res.send('viewing one shelter');
})

router.get('/:id/edit',(req, res)=>{
    res.send('editing a shelter');
})

module.exports = router;