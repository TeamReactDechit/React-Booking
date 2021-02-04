var express = require('express');
var router = express.Router();

var db = require("../database/database.js");
var md5 = require("md5");


/* Login. */
router.post("/login", (req, res, next) => {
  var errors=[];
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.email){
      errors.push("No email specified");
  }
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }
  var data = {
      email: req.body.email,
      password : md5(req.body.password)
  }
  var sql ='SELECT * FROM user WHERE email=? AND password=?'
  var params =[data.email, data.password]
  db.get(sql, params, function (err, row) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      if(row){
        console.log(row);
        req.session.userId = row.id;
        req.session.user = row;
        
        console.log(req.session);
        //res.redirect('/');
        res.json({
          "message": "you are now logged with id:"+req.session.userId
        })
      } else {
        res.json({
          "message": "wrong credentials",
        })
      }
      
  });
})

module.exports = router;