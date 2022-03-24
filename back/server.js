require('dotenv').config()
const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser'); 
const nodemailer = require('nodemailer');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();

const massage = require('./massageModel');

app.use( '/static' ,express.static(path.join(__dirname, '../dist'), { index: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header
    (
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "*")
    
    next();
});

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'almzrab@gmail.com',
        pass:'Aa90Kk45'
    }
});

app.post('/test',()=>{

    res.status(200).send('oihoiho');

});
app.get('/test',()=>{

    res.status(200).send('oihoiho');

});

app.post('/massage', (req, res) =>{

    // const mailOptions = {
    //     from:'almzrab@gmail.com',
    //     to:'ws.ahmadbx@gmail.com',
    //     subject:'massage',
    //     text:` 
    //     from : ${ req.body.name } 
    //     Email : ${ req.body.email } 
    //     subject : ${ req.body.subject }
    //     massage :    ${req.body.massage}`
    // }

    // const mailOptions1 = {
    //     from:'almzrab@gmail.com',
    //     to:req.body.email,
    //     subject:'auto massage',
    //     text:` Hi ${ req.body.name } \ni got your massage and i will try to connect you as soon as posible. \n\n Ahmad   `
    // }



    // // mongoose.connect(`mongodb+srv://AHMAD:AHMAD@cluster0.hrmsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    // // .then(() => {
    // //     console.log(' mongodb connected .. ');
    // //     massage.create(req.body)
    // //     .then(() => {
    // //         console.log('massage created successfully');
    // //         res.status(200).json({
    // //             success: true,
    // //             massage:'massage created successfully '
    // //         })
    // //         mongoose.connection.close();
    //         transporter.sendMail(mailOptions1, (err, info) =>{ 
    //             if(err){ 
    //                 console.log(err);
    //             }else{
    //                 console.log(' Email sended', info.response);
    //             }
    //          })
    //         transporter.sendMail(mailOptions, (err, info) =>{ 
    //             if(err){ 
    //                 console.log(err);
    //             }else{
    //                 console.log(' Email sended', info.response);
    //             }
    //          })
    //     });
    // });
});

app.get('/CV', (req , res ) => {

    res.status(200).sendFile( path.join(__dirname, '../back', 'CV.pdf'));
    
});

app.get('/', (req , res ) => {

    res.status(200).sendFile( path.join(__dirname,'../dist' , 'index.html'));

});

app.listen(port,()=>{
    console.log(` server listening on port ${port}`);
});