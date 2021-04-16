const express = require('express');
const bodyParser =require('body-parser'),


methodOverride = require("method-override"),
mongoose = require("mongoose");
const port = process.env.PORT||2000;


const app=  express();
const nav=
[
    {link:'/books',name:'Books'},
    {link:'/author',name:'Authors'},
    {link:'/admin',name:'Add Books'},
    {link:'/addauthor',name:'Add Authors'},
     {link:'/login',name:'Login'},
    {link:'/signin',name:'Signin'},
    {link:'/',name:'Log Out'}
]

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter =  require('./src/routes/authorRoute')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);

const editRouter = require('./src/routes/editRoutes')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/author',authorsRouter);
app.use('/admin',adminRouter);
app.use('/addauthor',addauthorRouter);
app.use('/edit',editRouter);
app.use('/login',loginRouter);

app.use('/signin',signupRouter);

app.use(bodyParser.urlencoded({ extended:true }));
app.use(methodOverride("_method"));



app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
});

});
app.get("/",(req, res)=>{
    Product.find({},(err,products)=>{
        if (err) {console.log(err);
        }else{
            res.render("index",{products: products});
        }
    })
    
})




app.listen(port,()=>{console.log("Server Ready at "+port)});