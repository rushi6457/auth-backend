const express = require('express');
const FormModel  = require("../models/adminJobmodel") 
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const argon = require("argon2")


// const job = async (req, res) => {
//     const {company_name,position,contract,location} = req.body;
//   try {
//     let newJob = await new FormModel.create(company_name,position,contract,location);
//     res.status(200).send({ message: "Job Add Successfull", data: newJob });
//   } catch (err) {
//     res.status(500).send({ message: err });
//   }
// };
let Job = async(req,res) =>{

    const {company_name,position,contract,location} = req.body;

    try {
        const newJob =  new FormModel({
            company_name,
            position,
            contract,
            location
        })
     
        await newJob.save()
        res.send({"message":"Job posted successfully" , newJob})
    } catch (error) {
            res.send(error)
    }
}

const getAlljobs = async(req,res) =>{

        try {
            let jobs = await FormModel.find()
            res.send(jobs)
        } catch (error) {
            res.send(error)
        }

}

module.exports = {
    Job,
    getAlljobs
}