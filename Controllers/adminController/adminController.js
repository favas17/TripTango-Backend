const agentModel = require("../../Models/agentModel");
const userModel = require("../../Models/userModel");


const getApplications = async (req,res) =>{

    try{
    const agents = await agentModel.find({verified:false}).select('-password');
        return res.status(200).json(agents)
    }catch(error){
        return res.status(500).json({message:"Failed to fetch data"})
    }
}


const acceptAgent = async (req,res)=>{
    const {id} =req.params
    try{
        const acceptedAgent = await agentModel.findByIdAndUpdate(id,{verified:true},{new:true})
        if(!acceptedAgent){
            return res.status(400).json({message:"Agent not Found"})
        }
        return res.status(200).json({message:"Agent accepted"})
    }catch(error){
        return res.status(500).json({message:"Failed to accept", error:error.message})
    }
}

const deleteAgent = async (req,res)=>{
    const {id} = req.params;
    
    try{
        const deletedAgent = await agentModel.findByIdAndDelete(id);

        if(!deletedAgent){
            return res.status(400).json({message:"Failed to delete"})
        }

        return res.status(200).json({message:"Agent Deleted"})
    }catch(error){
        return res.status(500).json({message:"Failed to delete",error:error.message})
    }
}


const getAgents = async (req,res) => {
    try {
        const agents = await agentModel.find({verified:true});
        return res.status(200).json(agents);

    } catch (error) {
        res.status(500).json({message:"Failed to fetch agents data",error:error.message})
    }
}


const getUsers = async (req,res)=>{
    try {
        const users = await userModel.find();
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message:"Failed to fetch users data",error:error.message});
    }
}


const deleteUser = async (req,res)=>{
    const {id} = req.params;
   console.log(id,"user")
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        if(!deletedUser){
            return res.status(400).json({message:"Failed to delete user"});
        }
        return res.status(200).json({message:"User deleted succesfully"})
    } catch (error) {
        res.status(500).json({message:"Failed to delete", error:error.message})
    }
}

module.exports = {
    getApplications,
    acceptAgent,
    deleteAgent,
    getAgents,
    getUsers,
    deleteUser,
}