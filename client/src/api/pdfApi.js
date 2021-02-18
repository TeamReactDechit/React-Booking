const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const pdfTemplate = require('./documents');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('pdf_receipt.pdf', (err) => {
      if(err) {
          return console.log('error');
      }
  res.send(Promise.resolve())
    });
})

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/pdf_receipt.pdf`);
});