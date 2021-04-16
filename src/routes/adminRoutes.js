const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata'),
bodyParser = require("body-parser"),
methodOverride = require("method-override");

function router(nav){
    adminRouter.get('/',function(req,res){
        res.render('addbook',
        {
            nav,
            title:'Library'
        })
    })
    adminRouter.post('/add',function(req,res){
        var item = 
        {   title:req.body.title,
           author: req.body.author,
            genre:req.body.genre,
            about:req.body.about,
            image:req.body.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
        
        
    });

     adminRouter.get('/',function(req,res){
        res.render('addbook',
        {
            nav,
            title:'Library'
        })
    })
    adminRouter.post('/add',function(req,res){
        var item = 
        {   title:req.body.title,
           author: req.body.author,
            genre:req.body.genre,
            about:req.body.about,
            image:req.body.image
        }
        var book = Bookdata(item);
        book.save();
        res.redirect('/books');
        
        
    });
    



//Get EditForm
adminRouter.get("/:id/edit",(req,res)=>{
    Bookdata.findById(req.params.id,function (err, product){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.render("edit",{bookdata: bookdata});
        }
    })
})

//Edit Put request
adminRouter.put("/:id/edit",(req, res)=>{
    Bookdata.findByIdAndUpdate(req.params.id,req.body.bookdata,function(err,updatedata){
        if(err){
            console.log(err);
            res.redirect("/");
        }else{
            res.redirect("/");
        }
    })
})
    return adminRouter;

}
module.exports = router;

