import React, { useState, useEffect  } from 'react';
import { Paper, makeStyles, Typography} from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({getDay, onRequestDate}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(true);

    useEffect( () => {
        if(getDay === 'today') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[getDay] )

    
    return(
        
        
            <Paper onClick={() => onRequestDate('today')} className={ select ? classes.paperSelected : classes.paper}>
                <Typography id='today' style={{fontSize: '.75rem'}}>Today <br/> {new Date().getDate()} </Typography>  
            </Paper>
    )
};

export default WeatherToday;