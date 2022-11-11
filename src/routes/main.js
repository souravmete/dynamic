const express = require('express');
const Detail = require("../models/detail");
const slider = require('../models/slider');
const service =require('../models/service');
const contact =require('../models/contact');
const { response } = require('express');

const routes = express.Router()




routes.get("/", async (req, res) => {
    // res.send("This is responed from routes");
    const details = await Detail.findOne({ "_id": "6334b683a61a0e3ad6231bc0" })
    const slides = await slider.find()
    const services =await service.find()


    // console.log(slides)
    // console.log(details);

    res.render("index", {
        details: details ,
        slides:slides,
        services:services

    });
})




routes.get("/gallery", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6334b683a61a0e3ad6231bc0" })
    res.render("gallery",{
        details: details
    });
})




routes.get("/services", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6334b683a61a0e3ad6231bc0" })
    res.render("services",{
        details: details
    });
})




routes.get("/about", async (req, res) => {
    const details = await Detail.findOne({ "_id": "6334b683a61a0e3ad6231bc0" })
    res.render("about",{
        details: details
    });
})




routes.get("/contact",async (req, res) => {
    // res.send("This is responed from routes of contact(main.js)");
    const details = await Detail.findOne({ "_id": "6334b683a61a0e3ad6231bc0" })
    res.render("contact",{
        details: details
    });
})

routes.post("/process-contact-form",async(request,response)=>{
    console.log("This form is submitted")
    console.log(request.body)
    // save the data to DB
    try{

        const data=await contact.create(request.body)
        console.log(data);
        response.redirect("/?sucess")

    }catch(e)
    {
        console.log(e)
        response.redirect("/?error");
    }
})




module.exports = routes