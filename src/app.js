const express=require("express");
const hbs=require("hbs");
const app=express();
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const routes=require('./routes/main')
const Detail=require("./models/detail");
const detail = require("./models/detail");
const slider=require("./models/slider");
const service = require("./models/service");


app.use(bodyparser.urlencoded({
    extended:true
}))

app.use('/static',express.static("public"))
app.use('',routes)

// template  engine

app.set('view engine','hbs')
app.set("views","views");
hbs.registerPartials("views/partials");



// data base connection
mongoose.connect("mongodb://localhost/website",()=>{
    console.log("DB Connected");

    // service.create([
    //     {
    //         title:'Provide Best Courses',
    //         icon:'fa-brands fa-accusoft',
    //         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad.',
    //         linkText:'Check',
    //         link:'https://fontawesome.com/',
    //     },
    //     {
    //         title:'Learn Project',
    //         icon:'fa-solid fa-shield-cat',
    //         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad.',
    //         linkText:'Check',
    //         link:'https://fontawesome.com/',
    //     },
    //     {
    //         title:'Contributers',
    //         icon:'fa-solid fa-people-group',
    //         description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, ad.',
    //         linkText:'Check',
    //         link:'https://fontawesome.com/',
    //     }
    // ])






    // slider.create([
    //     {
    //         title:'java lecture is -oop',
    //         subTitle:'java is one of the popular language',
    //         imageUrl:"/static/images/p1.jpg"
    //     },
        
    //     {
    //         title:'What is Django in python',
    //         subTitle:'java is one of the popular language',
    //         imageUrl:"/static/images/p2.png"
    //     },

    //     {
    //         title:'javaScript lecture is -oop',
    //         subTitle:'java is one of the popular language',
    //         imageUrl:"/static/images/p3.png"
    //     },

    // ])




    // detail.create({
    //     brandName: "Master Tech Solution",
    //     brandIconUrl:"https://yt3.ggpht.com/32Z0ly3_Myojwy8BuBqcnt-DqIzlMDAKxhjCISvWx5WThn31ZvJqtBwl6pZlPYIPQblrPx8dAA=s68-c-k-c0x00ffffff-no-rj",
    //     links:[
    //         {
    //             lable: "Home",
    //             url:"/",
    //         },
    //         {
    //             lable: "Services",
    //             url:"/services",
    //         },
    //         {
    //             lable: "Gallery",
    //             url:"/gallery",
    //         },
    //         {
    //             lable: "About",
    //             url:"/about",
    //         },
    //         {
    //             lable: "Contact Us",
    //             url:"/contact",
    //         },

            
    //     ]
    // })
})



app.listen(process.env.PORT | 8000, ()=>{
    console.log("Server started")
})
