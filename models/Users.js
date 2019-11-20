var mongoose=require('mongoose'),
    LocalStrategy=require('passport-local-mongoose');


var Schema=new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    phnno: Number
});

Schema.plugin(LocalStrategy);

module.exports=mongoose.model("User", Schema);