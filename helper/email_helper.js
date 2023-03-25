const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    host: 'chi118.greengeeks.net',

    port: 465,

    auth: {

        user: "noreply@cashsyria.com",

        pass: "yazz313Y$"

    }

})
exports.sendEmail = (to, sub, text) => {
    message = {

        from: "noreply@cashsyria.com",

        to: to,

        subject: sub,

        text: text

   }
   transporter.sendMail(message, (err, info)  => {

    if (err) {

      console.log(err)

    } else {

      console.log(info);

    } 
    });
}