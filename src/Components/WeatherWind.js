import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';
import ArrowIcon from '@material-ui/icons/ArrowUpward';

const useStyle = makeStyles(WeatherStyles)

const WeatherWind = ({weatherData, weatherDataLoaded}) => {

    const classes = useStyle()

    const weatherWind = () => {
        return weatherDataLoaded? 
            `${weatherData.wind_speed} mph` : ''
            
    }

    const arrow = () => {
        return weatherDataLoaded? 
            <ArrowIcon style={{fontSize: '5rem', transform: `rotate(${weatherData.wind_deg}deg)`}}/> : <ArrowIcon style={{fontSize: '4rem'}}/>
    }

    return(
        <Grid item xs={6} className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container>
                    <Grid item xs={12}>
                        {arrow()}
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='button'>{weatherWind()}</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
};

export default WeatherWind;