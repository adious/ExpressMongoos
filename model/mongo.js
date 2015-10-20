var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/express');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = new mongoSchema({
    "username" : String,
    "email" : String
},{ collection : 'usercollection' });
// create model if not exists.
module.exports = mongoose.model('usercollection',userSchema);