module.exports.cart=function(req,res){
    return res.render('cart',{title:"cart"})
<<<<<<< HEAD
}

module.exports.update=function(req,res){
    // let cart={
    //     items:{
    //         pizzaId:{item:pizzaObject,qty:0}
    //     }
    //     totalQty:0,
    //     totalPrice:0
    // }
    if(!req.session.cart){
        req.session.cart={
            items:{},
            totalQty:0,
            totalPrice:0
        }
      }
      let cart=req.session.cart
        if(!cart.items[req.body._id]){
            cart.items[req.body._id]={
                items:req.body,
                qty:1
            }
            cart.totalQty=cart.totalQty+1,
            cart.totalPrice=cart.totalPrice+req.body.price
        }else{
            cart.items[req.body._id].qty= cart.items[req.body._id].qty+1,
            cart.totalQty=cart.totalQty+1,
            cart.totalPrice=cart.totalPrice+req.body.price
        }

        
      return res.json({totalQty:cart.totalQty})

=======
>>>>>>> parent of 07118ec (fetching data to server)
}