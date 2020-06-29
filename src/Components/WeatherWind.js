import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';
import ArrowIcon from '@material-ui/icons/ArrowUpward';

const useStyle = makeStyles(WeatherStyles)

const WeatherWind = ({wind, weatherLoaded}) => {

    const classes = useStyle()

    const weatherWind = () => {
        return weatherLoaded? 
            `${Math.round(wind.windSpeed)} mph` : ''
            
    }

    const arrow = () => {
        return weatherLoaded? 
            <ArrowIcon style={{fontSize: '3rem', transform: `rotate(${wind.wind_direction}deg)`}}/> : <ArrowIcon style={{fontSize: '4rem'}}/>
    }

    return(
            <Paper className={classes.paperLocationV2}>
                <Grid container>
                    <Grid item xs={12}>
                        {arrow()}
                    </Grid>
                    <Grid item xs={12}>
                    <Typography variant='button'>{weatherWind()}</Typography>
                    </Grid>
                </Grid>
            </Paper>
    )
};

export default WeatherWind;