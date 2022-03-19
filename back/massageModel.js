const { Schema , model }= require('mongoose');

const masssageSchema = Schema({
    name:String,
    email:String,
    subject:String,
    massage:String,
},{ timestamps:true } ) ;

const massage = model('massage',masssageSchema,'massages');

module.exports=massage;