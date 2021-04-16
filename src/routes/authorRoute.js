const express = require('express');
const { db } = require('../model/Authordata');
const Authordata = require('../model/Authordata');
const authorsRouter = express.Router();
function router(nav){

    // var authors =[ {
        
    //     author:'Meyer,Stephenie',
    //     about:'Stephenie Meyer (/ˈmaɪ. ər/; née Morgan; born December 24, 1973) is an American novelist. She is best known for her vampire romance series Twilight, which has sold over 100 million copies, with translations into 37 different languages.',
    //     Born: 'Stephenie Morgan; December 24, 1973',
    //     works:	'Twilight series ,The Host, The Chemist',
    //     img:"meyer.jpg"
    //     },
    //     {
            
    //         author:'Brow,Dan',
    //         about:'Dan Brown, (born June 22, 1964, Exeter, New Hampshire, U.S.), American author who wrote well-researched novels that centred on secret organizations and had intricate plots. He was best known for the Robert Langdon series, which notably included The Da Vinci Code (2003).',
    //         Born:' 22 June 1964 (age 56 years), Exeter, New Hampshire, United States',
            
    //         works:' The Da Vinci Code, Angels & Demons, Inferno, Orgin',
    //         img:"dan.jpg"
    //     },
    //     {
           
    //         author:'Arundhati Roy',
    //         about:'Suzanna Arundhati Roy (born 24 November 1961) is an Indian author best known for her novel The God of Small Things (1997), which won the Man Booker Prize for Fiction in 1997 and became the best-selling book by a non-expatriate Indian author.',
    //         Born:'24 November 1961 (age 59 years), Shillong',
            
    //         works:'The god of small things,Walking with the comrades',
           
    //         img:"arundhatiroy.jpg"
    //     },
    //     {
            
    //         author:'A P J Abdul Kalam',
    //         about:'Abdul Kalam, in full Avul Pakir Jainulabdeen Abdul Kalam, (born October 15, 1931, Rameswaram, India—died July 27, 2015, Shillong), Indian scientist and politician who played a leading role in the development of Indias missile and nuclear weapons programs. He was president of India from 2002 to 2007',
    //         Born:'15 October 1931, Rameswaram',
            
    //         works:'Wings of fire, Turning points, Ignited minds',
    //         img:"abdulkalam.jpg"
            
    //     },

    //     {
            
    //         author:'JK ROWLING',
    //         about:'J K. Rowling, is a British author and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history',
    //         Born:' Joanne Rowling; 31 July 1965 (age 55)',
    //         works:'Harry Potter series,Cormoran Strike series',
    //         img:"JKRowling.webp"
    //     }
         
    //         ]
    
    
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors)
        {
            res.render("author",
            {
                nav,
                title:'Authors',
                authors
        });
        
        })
       
    });
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id;
        Authordata.findOne({_id:id})
        .then(function(auth)
        {res.render('auth',
        {
           nav,
           title:'authors',
           auth
       });
    })
     
    });
    return authorsRouter;
}


module.exports = router;