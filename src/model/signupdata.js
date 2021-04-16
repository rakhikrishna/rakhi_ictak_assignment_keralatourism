//connection to mongoose
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/library1');
//schema definition
const Schema = mongoose.Schema;

const SignupSchema = new Schema(
    {
        username : String,
        email : String,
        password : String,
        repeatpassword:String,
        phonenumber : String
       
    }
);
//model creation

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;