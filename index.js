const express = require('express');
const app = express();
const path = require('path');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'mishaldev@hotmail.com',
    pass: 'p'
  }
});

const PORT = 80;
app.use(express.static(path.join(__dirname,'public')));

// get all the members
app.get('/:msg', (req,res) => {
  var mailOptions = {
    from: 'mishaldev@hotmail.com',
    to: 'mishaldev@hotmail.com',
    subject: 'an Email from my website!',
    text: req.params.msg
  };
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});
app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
