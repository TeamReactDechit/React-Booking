const express = require('express');
const router = express.Router();
const Op = require('../models').Sequelize.Op;
const Prenotations = require('../models').Prenotations;
const {getDate} = require('../helpers/helpers');

router.post('/all/prenotations', async (req, res) => {
    console.log("----Cerca tutte le prenotazioni----");
    const params = req.body.date;
    const datePrenotations = getDate(params);

    try{
            const result = await findDatePrenotations({date:datePrenotations});
            
            res.json(result);
        } catch (e) {
            res.status(500).send(e.toString());
        }
    
    });

    async function findDatePrenotations(pars = {}) {
         return Prenotations.findAll({
            where:{
                date: pars.date
            }
        });
    }

    module.exports = router;
