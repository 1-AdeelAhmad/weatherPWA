import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherIcon = ({weatherData, weatherDataLoaded}) => {

    const  classes  = useStyles()

    const weatherIcon = () => {
        return weatherDataLoaded? 
            weatherData.weather[0].icon : '50n'
            
    }


    return(
        <Grid item xs={6} className={classes.root} >
            <Paper className={classes.paper}>
                <Typography variant='button'>
                    
                    <img src={`http://openweathermap.org/img/wn/${weatherIcon()}@2x.png`} alt='weatherIcon'/> 
                </Typography>
            </Paper>
        </Grid>
    )
};

export default WeatherIcon;