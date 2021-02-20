const express = require('express');
const router = express.Router();
const Op = require('../models').Sequelize.Op;
const Locations = require('../models').Locations;
const Seats = require('../models').Seats;
const {getDate} = require('../helpers/helpers');

router.get('/mappa', async (req, res) => {

    try{
            const result = await findAllLocationsSeats();
            
            res.json(result);
        } catch (e) {
            res.status(500).send(e.toString());
        }
    
    });

    async function findAllLocationsSeats() {
         return Locations.findAll({
            include: [Seats]
        });
    }

    module.exports = router;
