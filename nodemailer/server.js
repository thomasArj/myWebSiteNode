var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

    var app = express();
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    var port = 8080;
    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'brownaformac@gmail.com',
              pass: 'Tabrownaformac'
          }
      });
      let mailOptions = {
          to: '"ARAUJO Thomas" <brownaformac@gmail.com>', // sender address
          from: req.body.from, // list of receivers
          fromm: req.body.fromm, // first name
          phone: req.body.phone, // phone line
          html: req.body.from + " / " + req.body.phone + " / " + req.body.name + " " + req.body.fistname + " : " + req.body.body // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
