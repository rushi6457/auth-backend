
const mongoose = require('mongoose')
const FormSchema = new mongoose.Schema({

    company_name:{
        type:String,
     
    },
    position:{
        type:String,
       
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