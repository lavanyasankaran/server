const mongoose = require('mongoose');
const {Schema} = mongoose;
const ReceipientSchema =require('./Reciepient')

const surveySchema =new Schema({
    title:String,
    body:String,
    subject:String,
    recipients:[ReceipientSchema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    dateSent:Date,
    lastResponded:Date


});

mongoose.model('surveys',surveySchema);