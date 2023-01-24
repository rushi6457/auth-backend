
// const express = require("express")
// const app = express.Router();
// const {job,getjob} = require("../controller/adminController")

// app.post("/savejob",job)
// app.get("/getjob",getjob)
// module.exports = app


const express = require('express');
const JobModel  = require("../models/adminJobmodel") 
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const argon = require("argon2")


const Job = async(req,res) =>{

    const {company_name,position,contract,location} = req.body;

    try {
        const newJob =  new FormModel({
            company_name,
            position,
            contract,
            location
        })
     
        await newJob.save()
        return res.send({"message":"Job posted successfully" , newJob})
    } catch (error) {
         return   res.send(error)
    }
}

const getAlljobs = async(req,res) =>{

        try {
            let jobs = await FormModel.find()
           return  res.send(jobs)
        } catch (error) {
           return res.send(error)
        }

}

module.exports = {
    Job,
    getAlljobs
}