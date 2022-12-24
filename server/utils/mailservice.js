let nodemailer = require("nodemailer")

let transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth : {
        user: 'zdravkoapp2021@gmail.com',
        pass : 'VladaMirkoAndjelaMila123!'
    }
});

function sednMailTo(to, subject, text){
    let mailOptions = {
        from: 'zdravkoapp2021@gmail.com',
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