const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mail = require('./mail');


const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/poll-ui'));
    

app.use(bodyParser.json());

app.use(cors());

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/poll-ui/index.html'));
    });

app.post('/sendmail', function(req,res) {
    const user = req.body;
    mail(user.email);
});
    

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080, () =>{
    console.log("Server started...");
});
