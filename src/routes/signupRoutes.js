const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/signupdata');
signupRouter.use(express.urlencoded({extended:true}));

function router(nav){
    signupRouter.get('/',function(req,res){
        res.render('signin',{
            nav,
            title:'Signin',
            
        });
    });
    signupRouter.get('/login',function(req,res){
        res.render('/login');
    });
    
    signupRouter.post('/login',function(req,res){
        var details =
        {
            username:req.body.username,
            email: req.body.email,
             password:req.body.password,
             phonenumber:req.body.phonenumber
            
        }
        var data = Signupdata(details);
        data.save();
        res.redirect('/login');
    });
    
    return signupRouter;
}



module.exports = router;