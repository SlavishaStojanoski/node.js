require('dotenv').config()

const events = require('events');
const emitter = new events.EventEmitter();

const nodemailer = require('nodemailer');
// console.log(process.env.EMAIL)
// Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASWORD
    }
});

//Mail option.. from,to,headline,content...
const createdMail = {
    from: 'nnodejs@gmail.com',
    to: 'slavisa.stojanoski992@gmail.com',
    subject: 'New product!',
    text: 'This is content for the product created event'
}
//Second mail option
const deleteInfoMail = {
    from: 'nnodejs@gmail.com',
    to: 'slavisa.stojanoski992@gmail.com',
    subject: 'Oh no! Product deleted!',
    text: "Don't over-React.js"
}



// this emmiter sent mail with subject:NEW product! and 
//content 'This is content for the product created event'
emitter.on('product_created', data => {
    //create(send mail) with transporter
    transporter.sendMail(createdMail, (err, data) => {
        if(err) {
            console.log('Error', err)
        } else {
            console.log('Email sent!!')
        }
    } )
})

// this emmiter sent mail with subject:NEW product! and 
//content 'This is content for the product created event'
emitter.on('product_deleted', data => {
    //create(send mail) with transporter
    transporter.sendMail(deleteInfoMail, (err, data) => {
        if(err) {
            console.log('Error', err)
        } else {
            console.log('Email sent!!')
        }
    } )
})

emitter.emit('product_created')