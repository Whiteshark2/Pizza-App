const express=require('express')
const router=express.Router()
const orderController=require('../controllers/orderController')

router.post('/',orderController.Store)

module.exports=router