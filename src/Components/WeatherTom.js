import React, { useState, useEffect } from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({getDay, onRequestDate}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(false);

    useEffect( () => {
        if(getDay === 'tom') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[getDay] )
    

    return(
            <Paper onClick={() => onRequestDate('tom')} className={ select ? classes.paperSelected : classes.paper}>
            
                        <Typography id='tom' style={{fontSize: '.75rem'}} >Tomorrow <br/> {new Date().getDate()+1}</Typography>
                    
            </Paper>
    )
};

export default WeatherToday;