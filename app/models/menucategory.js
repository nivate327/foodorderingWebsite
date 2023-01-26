const mongoose=require("mongoose");

//schema
const menuSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true
    },

    image:
    {
        type:String,
        required:true
        
    },

    price:
    {
     type: Number,
     required:true
    },

    link:
    {
        type:String,
        required:true
         
    },

    description:
    {
        type:String,
        required:true
    },

    img2:
    {
        type:String,
        required:true
    },

    img3:
    {
        type:String,
        required:true
    },

    img4:
    {
        type:String,
        required:true
    }

});

const categorymenu=new mongoose.model("categorymenu", menuSchema);

module.exports=categorymenu;