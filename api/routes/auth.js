const express = require('express');
const md5 = require("md5");
const jwt = require('jsonwebtoken');
const router = express.Router();

const Users = require('../models').Users;


/* Login */
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
      password: md5(req.body.password)
  }
  Users.findOne({
    where: data
  })
  .then((user) => {
    let payload = {
        id: user.id, 
        email: user.email, 
        role: user.role
    };
    if(user){
      const accessToken = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRES_IN}
      );
      res.json({
        "message": "you are now logged as "+user.email,
        "token": accessToken,
        "data": {
                  "id" : user.id,
                  "name": user.name,
                  "surname": user.surname,
                  "email": user.email,
                  "birthdate": user.birthdate
                }
      })
    }else{
      res.json({
        "error": "Username or password incorrect",
      })
    }
  })
  .catch((err) => {
      res.status(400).json({"error":err.message});
      return;
  });
})

module.exports = router;