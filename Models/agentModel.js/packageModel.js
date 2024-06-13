const mongoose = require("mongoose")

const packageSchema = new mongoose.Schema({
    packageName:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    days:[{
        dayNumber:{
            type:Number,
            required:true
        },
        placeDetails:{
            type:String,
            required:true
        },
        stays:[String],
        foods:[String],
    }],
    images:[String],
    mapLocation:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }

})

const package = mongoose.model("packages",packageSchema);

module.exports = package;