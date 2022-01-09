const express = require('express');
const homeRouter = express.Router();
const Homedata = require('../model/homedata');
var nodemailer = require('nodemailer');


// function router(){
    homeRouter.get('/',(req,res)=>{
        res.render('home')
    });

    homeRouter.post('/mailer',(req,res)=>{
        var item={
            email: req.body.email
        }

        var mail = Homedata(item);
        mail.save();
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
            //   user: 'saranyabs96@gmail.com',
            //   pass: 'SSSSSARANYA'
            user:'saranyatester2919@gmail.com',
            pass:'Testers@ranya2919'
            }
          });

          var mailOptions = {
            from: 'saranyatester2919@gmail.com',
            to: item.email,
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              res.send("yahuu");
            } else {
              console.log('Email sent: ' + info.response);
              res.send("puhuu")
            }
        });

        res.send('successful');
    });
//     return homeRouter;
// }

// module.exports = router;
module.exports = homeRouter;