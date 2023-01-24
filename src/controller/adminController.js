const FormModel = require("../models/adminJobmodel")

const job = async (req,res) =>{
  try{ 
    const {comapny_name,position,contract,Location,comapny_logo} = req.body
    let data = new jobmodel({comapny_name,position,contract,Location,comapny_logo})
    await data.save()
    return res.status(201).send("Data saved succefully")
}catch(e){
    console.log(e)
    }

}
const getjob = async (req,res) =>{
    try{
        let data = await jobmodel.find({})
      return res.status(200).send(data)
  }catch(e){
      console.log(e)
      }
  
  }

// module.exports ={job,getjob}