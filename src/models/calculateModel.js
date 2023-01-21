const mongoose  = require('mongoose');

const CalculateSchema =new mongoose.Schema({

        annualInstalment:{type:Number},
        annualIntrest:{type:Number},
        numberofYears:{type:Number}
})

const CalculateModel = mongoose.model("calculate",CalculateSchema)
module.exports = CalculateModel

