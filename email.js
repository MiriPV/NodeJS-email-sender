const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'testmiri7@gmail.com',
      pass: 'R97ym^#2e1t!aa'
    }
  });

var mailOptions = {
    from: senderMail ,
    to: 'mirandaverheij93@gmail.com' ,
    subject: 'Hello World!' ,
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});