const express = require('express');
const router = express.Router();

const db = require("../database/database.js");
const md5 = require("md5");

/* GET users listing. */
router.get("/users", (req, res, next) => {
  let sql = "select * from users";
  let params = [];
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

/* GET a user by id. */
router.get("/user/:id", (req, res, next) => {
  let sql = "select * from users where id = ?"
  let params = [req.params.id]
  db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      if(row){
        res.json({
            "message":"success",
            "data":row
        })
      }else{
        res.json({
            "message":"no user with id="+req.params.id
        })
      }
    });
});

/* Create a new user. */
router.post("/user", (req, res, next) => {
  let errors=[]
  if (!req.body.password){
      errors.push("No password specified");
  }
  if (!req.body.email){
      errors.push("No email specified");
  }
  if (!req.body.type){
    errors.push("No user type specified");
}
  if (errors.length){
      res.status(400).json({"error":errors.join(",")});
      return;
  }

  let birthdate = req.body.birthdate;
  console.log(birthdate);

  let data = {
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password : md5(req.body.password),
      birthdate: null,
      type: "USER",
      created_at: Date.now()
  }
  let sql ='INSERT INTO users (name, email, password, birthdate, type, created_at) VALUES (?,?,?,?,?,?)';
  let params =[data.name, data.email, data.password, data.birthdate, data.type, data.created_at];
  db.run(sql, params, function (err, result) {
      if (err){
          res.status(400).json({"error": err.message})
          return;
      }
      res.json({
          "message": "success",
          "data": data,
          "id" : this.lastID
      })
  });
})

/* Update an existing user. */
router.patch("/user/:id", (req, res, next) => {
    let data = {
        name: req.body.name,
        email: req.body.email,
        password : req.body.password ? md5(req.body.password) : null,
        birthdate: Date.UTC(req.body.birthdate),
        type: req.body.type 
            ?req.body.type.toUpperCase()=="ADMIN"
                ?req.body.type.toUpperCase()
                :"USER"
            :null,
        updated_at: Date.now()
    }
    db.run(
        `UPDATE users SET
           name = COALESCE(?,name),
           email = COALESCE(?,email),
           password = COALESCE(?,password),
           birthdate = COALESCE(?,birthdate),
           type = COALESCE(?,type),
           updated_at = ?
           WHERE id = ?`,
        [data.name, data.email, data.password, data.birthdate, data.type, data.updated_at, req.params.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

/* Delete an existing user. */
router.delete("/user/:id", (req, res, next) => {
    db.run(
        'DELETE FROM users WHERE id = ?',
        req.params.id,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})

module.exports = router;
