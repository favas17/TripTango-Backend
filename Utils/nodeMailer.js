const nodemailer = require("nodemailer")

const transporter = nodemailer.transporter({
    service:"Gmail",
    auth:{
        user:"favasfvs111@gmail.com",
        pass:"czxo qaui zmpl egls"
    }
});

module.exports = transporter;