const express = require('express');
const editRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books = [
    //     {
    //         title : 'Tom and Jerry',
    //         author : 'Joseph Barbera',
    //         genre : 'Cartoon',
    //         img : "tom.jpg"
    //     },
    //     {
    //         title : 'Harry Potter',
    //         author : 'J K Rowling',
    //         genre : 'Fantasy',
    //         img : "harry.jpg"
    //     },
    //     {
    //         title : 'Paathummayude Aadu',
    //         author : 'Basheer',
    //         genre : 'Drama',
    //         img : "basheer.jpg"
    //     }
    // ]
  
    
      editRouter.get('/:id',function(req,res){
        console.log(req.params.id);

        const id = req.params.id;
        Bookdata.findById({_id:id})
        .then(function(book){
            res.render('edit',{
                nav,
                title:'Library',
                book
            })
        });
        // Bookdata.findById(req.params.id,function(req,res){
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log(book);
        //         res.render('edit',{books:book})
        //     }
        // });
    });


    editRouter.post('/:id',function(req,res){
        console.log("MyId is"+req.params.id);

        var book = {

            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image
        }

        Bookdata.findByIdAndUpdate(req.params.id,book,function(err){
            if(err){
                res.redirect('edit/'+req.params.id);
            }
            else{
                res.redirect('../book');
            }
        });
    });
   
    return editRouter;
}



module.exports = router;

