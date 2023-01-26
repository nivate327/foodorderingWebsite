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
    },

    qty:
    {
        type:Number,
        required:true
    }


});

const homemenu=new mongoose.model("homemenu", menuSchema);

module.exports=homemenu;