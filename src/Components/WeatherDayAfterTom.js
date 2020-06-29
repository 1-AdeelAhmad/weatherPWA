import React, { useState, useEffect } from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({getDay, onRequestDate}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(false);

    useEffect( () => {
        if(getDay === 'dat') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[getDay] )

    const calculateDay = () => {
        
        const date = new Date().getDate()+2;
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return <Typography style={{fontSize: '.75rem'}} id='dat'>{days[new Date().getDay()]} <br/> {date}</Typography>
    }

    return(
            <Paper onClick={() => onRequestDate('dat')} className={ select ? classes.paperSelected : classes.paper}>
                {calculateDay()}
            </Paper>
    )
};

export default WeatherToday;