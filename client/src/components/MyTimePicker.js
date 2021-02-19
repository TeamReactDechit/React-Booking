import React, { useEffect, useState } from "react";
import moment from 'moment';

const MyTimePicker = ({start, end, step, range}) =>{
    const [timeRange, setTimeRange] = useState([]);

    useEffect(() => {
        let options=[];
        if(start != '' && end != '' && step != '' && range != undefined){
            
            let array_start = start.split(":");
            let array_end = end.split(":");
            const inizio = moment().hours(array_start[0]).minutes(array_start[1]);
            const fine = moment().hours(array_end[0]).minutes(array_end[1]);
            
            let size = Number(fine.diff(inizio,'minutes') / step)

            let tempo = inizio;
            for(let i=0; i<size; i++){
                tempo = tempo.add(step,'minutes');
                debugger
                if(!range.includes(tempo.hour())){
                    options[i] = tempo.format('HH:mm');
                }
            }
        }
        setTimeRange(options);
      }, []);
    

    return(
       
        <select>
            <option>Select..</option>
            {timeRange?.map((op, index) => (
                <option key={index} value={op}>
                    {op}
                </option>
            ))}
        </select>
     
    );
}

export default MyTimePicker;