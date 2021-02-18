const express = require('express');
const router = express.Router();
const pdfTemplate = require('../documents/pdf');
const pdf = require('html-pdf');

router.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile(`${__dirname}/rezultati.pdf`, (err) => {
    if(err) {
        return console.log('error');
    }
res.send(Promise.resolve())
  });
})

router.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/rezultati.pdf`);
});

module.exports = router;