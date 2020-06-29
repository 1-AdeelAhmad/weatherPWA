import React from 'react';
import { Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherIcon = ({icon, weatherLoaded}) => {

    const  classes  = useStyles()

    const weatherIcon = () => {
        return weatherLoaded? 
            icon: '50n'
            
    }


    return(
            <Paper className={classes.paperLocationV2}>
                <Typography variant='button'>
                    <img src={`http://openweathermap.org/img/wn/${weatherIcon()}@2x.png`} alt='weatherIcon'/> 
                </Typography>
            </Paper>
    )
};

export default WeatherIcon;