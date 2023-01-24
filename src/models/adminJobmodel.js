
const mongoose = require('mongoose')
const FormSchema = new mongoose.Schema({

    companyName:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true
    },
    contract:{
        type:Boolean,
    },
    location:{
        type:String,
    }
},{
    timestamps:true
})

const FormModel = ("admin",FormSchema)
module.exports =FormModel