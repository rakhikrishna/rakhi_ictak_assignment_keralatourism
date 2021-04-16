const express = require('express');
const { db } = require('../model/Bookdata');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){

    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",
        {
            nav,
            title:'Books',
            books
    });
        })
        
    
    });
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function(book){
            res.render('book',
     {
        nav,
        title:'Books',
        book
    });
        })
     
    });
    booksRouter.put('/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndUpdate({_id:id})
        .then(function(book){
            res.render('book',
     {
        nav,
        title:'Books',
        book
    });
        })
     
    });
    
    return booksRouter;
}


module.exports = router;