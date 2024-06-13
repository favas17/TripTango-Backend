const packageModel = require("../../Models/agentModel.js/packageModel")



const packageGet = async (req,res)=>{

    try{
        const packages = await packageModel.find();
        return res.status(200).json(packages);
    }catch(error){
        return res.status(500).json({message:'Failed to fetch package details',error:error.message})
    }

}

// adding package
const packagePost = async (req,res,next)=>{
    console.log(req.files)
    try{
    const {packageName,location,price,details,duration,mapLocation,category} = req.body;
    const days = JSON.parse(req.body.days);
    // mapping throug images files
    const images = req.files.map(file =>file.filename);
console.log(images)
    const newPackage = new packageModel({
        packageName,
        location,
        price,
        details,
        duration,
        days,
        images,
        mapLocation,
        category,
    })
     
    await newPackage.save();
    return res.status(201).json({message:"Package saved succusfully"})

}catch(error){
    next(error)
}
    
}

module.exports = {
    packageGet,
    packagePost,
}