const nodeMailer = require('nodemailer');

exports.sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_HOST,

        auth:{
            user:process.env.SMPT_HOST,
            pass:process.env.SMPT_PASSWORD
        },

        service: process.env.SMPT_SERVICE,
    });



 const mailOptions = {
    from:process.env.SMPT_MAIL,
    to:options.email,
    subject:options.subject,
    text:options.message,
 };

 await transporter.sendMail(mailOptions);


};