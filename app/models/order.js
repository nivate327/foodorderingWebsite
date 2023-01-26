const mongoose=require("mongoose");


//schema
const orderSchema=new mongoose.Schema({
    customerID: 
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    items:
    {
        type:Object,
        required:true
    },
    phone:
    {
        type:String,
        required:true
    },
    address:
    {
        type:String,
        required:true
    },
    paymentType:
    {
        type:String,
        default:"COD"
    },
    status:
    {
        type:String,
        default:"order_placed"
    },
    totalprice:
    {
        type:Number,
        required:true
    },

    datetime :{
        type: Date,
		default: Date.now
    },


});

const order=new mongoose.model("order", orderSchema);

module.exports=order;