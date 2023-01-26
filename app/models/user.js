const mongoose=require("mongoose");


//schema
const userSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },

    email:
    {
        type:String,
        required:true,
        unique:true,
        
    },

    password:
    {
     type: String,
     required:true
    },

    role:
    {
        type:String,
        default:"customer"
    }

}, {timestamps:true});

const user=new mongoose.model("user", userSchema);

module.exports=user;