const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
        {
            lable: String,
            url: String,
        },
        
    ],
});

module.exports=mongoose.model("details",Detail)