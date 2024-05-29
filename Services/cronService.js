const Cron = require("node-cron");
const userModel = require("../Models/userModel")

const task = async ()=>{
    try {
        const expiryDay = new Date(Date.now() - 30* 24* 60* 60* 1000);
        console.log(expiryDay)
        const DeletedDocs = await userModel.deleteMany({
            verifiedUser:false,
            createdAt:{$lt:expiryDay}
        })
        console.log(DeletedDocs)
    } catch (error) {
        console.log(error,"have error in deleted uunverified user")
    }
}

const init = ()=>{
    Cron.schedule('0 0 * * *',task,{timezone:"UTC"})
}

module.exports = {init}