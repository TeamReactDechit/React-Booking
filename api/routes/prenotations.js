const express = require('express');
const router = express.Router();
const Op = require('../models').Sequelize.Op;
const Prenotations = require('../models').Prenotations;

router.post('/all/prenotations', async (req, res) => {
    console.log("/all/prenotations");
    const params = req.body.date;
    const datePrenotations = getDate(params);
    console.log(datePrenotations);
        try{
            const result = await findDatePrenotations({date:datePrenotations});
    console.log("result")
    console.log(result)
            res.json(result);
        } catch (e) {
            res.status(500).send(e.toString());
        }
    
    });


    function getDate(date){
        let dateParts = date.split("-");
        let dateNumber = Date.UTC(dateParts[0], dateParts[1]-1, dateParts[2],0,0,0,0);
        console.log("dateParts");
        console.log(dateParts);
        return dateNumber;
    }

    async function findDatePrenotations(pars = {}) {
        const where = {};
        console.log("getPrenotations");
        console.log(pars.date);
       
         return Prenotations.findAll({
            where:{
                start: pars.date
            }
        });
    }

    module.exports = router;
