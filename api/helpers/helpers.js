/**
 * 
 * @param {date} in formato aaaa-mm-dd
 * trasforma la data in formato UTC alle ore 00:00
 */
const getDate = (date) =>{
    let dateParts = date.split("-");
    let dateNumber = Date.UTC(dateParts[0], dateParts[1]-1, dateParts[2],0,0,0,0);
    console.log("dateParts");
    console.log(dateParts);
    return dateNumber;
}

module.exports = {
    getDate
};
