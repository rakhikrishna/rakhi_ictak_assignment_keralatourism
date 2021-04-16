const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata');

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render('addauthor',
        {
            nav,
            title:'NEW AUTHOR'
        })
    })
    addauthorRouter.post('/add',function(req,res){
        var item1 = 
        {   name:req.body.name,
           born: req.body.born,
            work:req.body.work,
            about:req.body.about,
            image:req.body.image
        }
        var author = Authordata(item1);
        author.save();
        res.redirect('/author');
        
        
    });
    return addauthorRouter;

}
module.exports = router;