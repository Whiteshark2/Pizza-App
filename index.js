const express=require('express')
const app=express()
const db=require('./config/mongoose')
const ejs=require('ejs')
const ejsLayout=require('express-ejs-layouts')
const sassMiddleware=require('node-sass-middleware')
const session=require('express-session')
require('dotenv').config()
const MongoStore=require('connect-mongo')
const flash=require('express-flash')


app.use(ejsLayout)
app.set('layout extractStyles',true)
app.set('layout extractScripts',true)

app.use(sassMiddleware({
    src:'./assets/sass',
    dest:'./assets/css',
    debug:false,
    outputStyle:'expanded',
    prefix:'/css'

}))



app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('assets'))
app.use(flash())

app.use(session({
    name:"pizza",
    secret:process.env.COOKIE_SECERT||"eee",
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:1000*60*500
    },
    store:MongoStore.create({
        mongoUrl: 'mongodb://localhost/Pizza',
        autoRemove:'disabled'
    })
}))


app.use('/',require('./routes'))





const Port=process.env.PORT||8000
app.listen(Port,function(err){
    if(err){console.log("error in listening")}
    console.log(`Server is running at port ${Port}`)
})