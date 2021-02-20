const express = require('express');
const router = express.Router();
const Op = require('../models').Sequelize.Op;
const Locations = require('../models').Locations;
const Seats = require('../models').Seats;

router.get('/seat/:id([0-9]+)/', async (req, res) => {

    console.log("CERCA SEAT");
    try{
        const seat_id = req.params.id;
        console.log(seat_id);
        const result = await findSeatsAndLocations(seat_id);
            
            res.json(result);
        } catch (e) {
            res.status(500).send(e.toString());
        }
    
    });

    async function findSeatsAndLocations(seat_id) {
         return Seats.findAll({
            include: [Locations],
            where : {
                id : seat_id
            }
        });
    }

    module.exports = router;
