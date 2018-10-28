const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser') 
const app = express()  
const port = process.env.PORT || 8081
const logfile = '/access.log'


const fs = require('fs')
const nodemailer = require('nodemailer')
const mg = require('nodemailer-mailgun-transport')



console.log(process.env);


app.set('views', path.resolve(__dirname, 'views')) 
app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var accessLogStream = fs.createWriteStream(path.join(__dirname, logfile), { flags: 'a' })
app.use(logger('dev'))
app.use(logger('combined', { stream: accessLogStream }))



app.get('/', function (req, res) {

  res.render('index.ejs')
})

app.get('/index', function (req, res) {
  res.render('index.ejs')
})
app.get('/tictactoe', function (req, res) {
  res.render('tictactoe.ejs')
})
app.get('/contactus', function (req, res) {
  res.render('contactus.ejs')
})
app.get('/tictactoe1', function (req, res) {
  res.render('tictactoe1.ejs')
})



app.post('/contactus', function (req, res) {
  var api_key = '47073d90cbe07f46d256657e7bfad884-4836d8f5-ab39e9cc';
  var domain = 'sandbox4631f18cd5cc49388154e7861b05e351.mailgun.org';
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: 'Rayaan Ahmed <postmaster@sandbox4631f18cd5cc49388154e7861b05e351.mailgun.org>',
    to: 'raybox94@gmail.com',
    subject: req.body.name,
    text: req.body.email + req.body.question
  };
   
  mailgun.messages().send(data, function (error, body) {
    console.log(body);
      if(!error)
      res.render('contact-confirm.ejs');
      else
      res.render('contact-error.ejs');

  });
})

app.get(function (req, res) {
  res.render('404.ejs')
})



app.listen(port, function () {
  console.log('\nWeb app started and listening on http://localhost:' + port + '.')
  console.log('\nLogs will be sent to this terminal and ' + logfile + '.')
  console.log('\nKeep this open while serving, and use CTRL-C to quit.')
})
