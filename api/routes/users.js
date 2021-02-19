const express = require('express');
const md5 = require("md5");

const router = express.Router();
const Users = require('../models').Users;


/* get all users */
router.get("/users", (req, res, next) => {
    Users.findAll()
    .then((users) => {
        res.json({
            "message":"success",
            "data":users
        });
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
    });
});

/* get a user by id */
router.get("/user/:id", (req, res, next) => {
    let id = req.params.id;
    Users.findByPk(id)
    .then((user) => {
        if(user){
            res.json({
                "message":"success",
                "data":user
            })
        }else{
            res.json({
                "message":`no user with id=${id}`
            })
        }
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
        return;
    });
});

/* Create a new user */
router.post("/user", (req, res, next) => {
    let errors=[]
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
    let data = {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password : md5(req.body.password),
        birthdate: getBirthdate(req.body.birthdate),
        role: "USER",
        created_at: Date.now()
    }
    Users.create(data)
    .then((user) => {
        res.json({
            "message": "success",
            "data": user
        })
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
        return;
    });
})

/* Update an existing user
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
 */

/* Delete an existing user by id */
router.delete("/user/:id", (req, res, next) => {
    let id = req.params.id;
    Users.destroy({
        where: {
            id: id
        }
    })
    .then(() => {
        res.json({
            "message": `user with id=${id} was successfully deleted`
        })
    })
    .catch((err) => {
        res.status(400).json({"error":err.message});
        return;
    });
})

function getBirthdate(birthdate){
    let dateParts = birthdate.split("-");
    let dateNumber = Date.UTC(dateParts[0], dateParts[1]-1, dateParts[2]);
    return dateNumber;
}

module.exports = router;