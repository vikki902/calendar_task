const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    username : {
        type: String,
        required:[true,"Please enter a Username"],
        unique: true
    },
    password:{
        type:String,
        required:[true,'Password is Required']

    },
    usertype:{
        type:String,
        required:[true,'usertype  is Required']
        
    },

    
}
,{timestamps:true});

module.exports = mongoose.model("User", UserSchema);