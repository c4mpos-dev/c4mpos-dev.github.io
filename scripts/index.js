// index.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com'); 
const app = express();

app.use(bodyParser.json());

const emailJsUserId = process.env.EMAILJS_USER_ID;
emailjs.init(emailJsUserId);

app.post('/send-email', (req, res) => {
    const { name, subject, content } = req.body;

    const message = {
        to: 'campos.eet@gmail.com', 
        from: 'campos.eet@gmail.com', 
        subject: subject,
        text: `Nome: ${name}\nMensagem: ${content}`
    };

    emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, message)
        .then((response) => {
            res.status(200).send('Email enviado com sucesso!');
        })
        .catch((error) => {
            res.status(500).send('Falha ao enviar o e-mail.');
        });
});