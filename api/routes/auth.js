const express = require('express');
const router = express.Router();

const db = require("../database/database.js");
const md5 = require("md5");

/* Login. */
router.post("/login", (req, res, next) => {
  let errors=[];
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.username){
      errors.push("No username specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  let data = {
      email: req.body.username,
      password : md5(req.body.password)
  }
  let sql ='SELECT * FROM users WHERE email=? AND password=?';
  let params =[data.email, data.password]
  db.get(sql, params, function (err, row) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      if(row){
        req.session.userId = row.id;
        req.session.user = row;
        res.json({
          "message": "you are now logged with id="+req.session.userId,
          "data": req.session.user
        })
      } else {
        res.json({
          "error": "wrong credentials",
        })
      }
      
  });
})

module.exports = router;