let nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth : {
        user: 'drivemasterapp@gmail.com',
        pass : 'drivemasterapp@gmail.co'
    }
});

function sednMailTo(to, subject, text){
    let mailOptions = {
        from: 'drivemasterapp@gmail.com',
        to: to,
        subject: subject,
        text: text
    };
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
            return false;
        }else{
            console.log('Email sent: '+ info.response);
            return true;
        }
    });
}
module.exports = {sednMailTo};