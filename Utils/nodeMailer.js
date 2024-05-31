const nodemailer = require("nodemailer");
const sendMail = async (email, otp) => {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"favasfvs111@gmail.com",
        pass:"czxo qaui zmpl egls"
      },
    });
    //  Email Template
    const template = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome to Carrer-Connect</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                        background-color: #F4F4F4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 30px auto;
                        padding: 20px;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #333;
                        text-align: center;
                    }
                    p {
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .otp {
                        font-size: 24px;
                        font-weight: bold;
                        color: #007BFF;
                        text-align: center;
                    }
                    .footer {
                        margin-top: 20px;
                        text-align: center;
                        color: #999;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to Trip Tango!</h1>
                    <p>Dear User,</p>
                    <p>We are delighted to welcome you to Trip Tango, you're travel partner.</p>
                    <p>To complete your registration, please use the OTP provided below:</p>
                    <p class="otp">${otp}</p>
                    <p>If you have any questions or need assistance, feel free to contact us.</p>
                    <p>Best Regards,<br/>The Trip Tango Team</p>
                </div>
            </body>
            </html>
        `;
    let mailOption = {
      from: "favasfvs111@gmail.com",
      to: email,
      subject: "Welcome to Trip Tango - Complete Your Registration!",
      html: template,
    };
    await transporter.sendMail(mailOption);
    console.log('mail send successfully')
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = sendMail;