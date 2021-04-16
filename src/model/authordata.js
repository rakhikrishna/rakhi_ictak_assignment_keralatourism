
//connection to mongoose
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/library1');
//schema definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
    {
        name: String,
        born : String,
        works : String,
        about : String,
        image : String
    }
);
//model creation

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;

