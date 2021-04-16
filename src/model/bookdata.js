//connection to mongoose
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/library1');
//schema definition
const Schema = mongoose.Schema;

const BookSchema = new Schema(
    {
        title : String,
        author : String,
        genre : String,
        about : String,
        image : String
    }
);
//model creation

var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;