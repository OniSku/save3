const express = require('express');
const defaultController = require('../controller/defaultController');
const router = express.Router();

router.use('/', (req,res,next) =>{
    res.render('default')
})

router.route('/')
    .get(defaultController.index)

module.exports = router;