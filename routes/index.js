const express=require('express')
const router=express.Router()

router.use('/home',require('./home'))
router.use('/cart',require('./cart'))

module.exports=router;