const agentModel = require("../../Models/agentModel")



const getApplications = async (req,res) =>{

    try{
    const agents = await agentModel.find({verified:false});
    console.log(agents,"hyyyhy")
        return res.status(200).json(agents)
    }catch(error){
        return res.status(500).json({message:"Failed to fetch data"})
    }
}


const acceptAgent = async (req,res)=>{
    const {id} =req.params
    try{
        const agent = await agentModel.findByIdAndUpdate(id,{verified:true, new:true})
        if(!agent){
            return res.status(400).json({message:"Agent not Found"})
        }
        return res.status(200).json({message:"Agent accepted"})
    }catch(error){
        return res.status(500).json({message:"Failed to accept", error:error.message})
    }
}

module.exports = {
    getApplications,
    acceptAgent,
}