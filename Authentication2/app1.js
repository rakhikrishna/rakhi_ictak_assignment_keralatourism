const express = require("express"),
        app = express(),
        bodyParser = require("body-parser"),
        Product = require("./models/product"),
        methodOverride = require("method-override");
        mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/CURD10");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(methodOverride("_method"));

//Show product and homepage
app.get("/",(req, res)=>{
    Product.find({},(err,products)=>{
        if (err) {console.log(err);
        }else{
            res.render("index",{products: products});
        }
    })
    
})
//add Product
app.post("/add",(req,res)=>{
    var name = req.body.name;
    var image = req.body.image;
    var price = req.body.price;
    var newProduct = {name:name,image:image,price:price};
    Product.create(newProduct,(err,data)=>{
        if(err){
            console.log(err);
        }else {
            console.log(data);
            res.redirect("/");
        }
    })
})

//Get EditForm
app.get("/:id/edit",(req,res)=>{
    Product.findById(req.params.id,function (err, product){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.render("edit",{product: product});
        }
    })
})

//Edit Put request
app.put("/:id/edit",(req, res)=>{
    Product.findByIdAndUpdate(req.params.id,req.body.product,function(err,updatedata){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/");
        }
    })
})

//Delete the product
app.delete("/:id",(req,res)=>{
    Product.findByIdAndRemove(req.params.id,function (err){
        if(err){
            console.log(err);
            res.redirect("/");
        }else {
            res.redirect("/");
            }
    })
})



app.listen(2000,(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log("Server Started At PORT 2000");
    }
})