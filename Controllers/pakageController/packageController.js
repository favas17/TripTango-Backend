const packageModel = require("../../Models/agentModel.js/packageModel")



const packageGet = async (req,res)=>{
    const packages = await packageModel.find();
    return res.status(200).json({message:"fetched succesully"})
}

// adding package
const packagePost = async (req,res,next)=>{
    console.log(req.files)
    try{
    const {packageName,location,price,details,duration,mapLocation,category} = req.body;
    const days = JSON.parse(req.body.days);
    // mapping throug images files
    const images = req.files.map(file =>file.path);
    

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