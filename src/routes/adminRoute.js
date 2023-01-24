
const express = require('express');
const JobModel  = require("../models/adminJobmodel") 
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const argon = require("argon2")


const Job = async(req,res) =>{

    const {company_name,position,contract,location} = req.body;
    console.log(company_name,position,contract,location);
    try {
        const newJob =  new JobModel({
            company_name,
            position,
            contract,
            location
        })
     
        await newJob.save()
       return  res.send({"message":"Job posted successfully" , newJob}).status(200)
    } catch (error) {
            res.send(error)
    }
}

const getAlljobs = async(req,res) =>{

        try {
            let jobs = await JobModel.find()
           return  res.send(jobs)
        } catch (error) {
           return res.send(error)
        }

}

module.exports = {
    Job,
    getAlljobs
}