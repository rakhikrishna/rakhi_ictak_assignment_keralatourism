const express = require('express');
const loginRouter = express.Router();

function loginroute(nav){
    loginRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            title:'Library',
            
        })
    })
    
    
    return loginRouter;
}



module.exports = loginroute;