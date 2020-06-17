import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyle = makeStyles(WeatherStyles)

const WeatherDesc = () => {

    const classes = useStyle()

    return(
        <Grid item xs={4} className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant='button'>Cloudy</Typography>
            </Paper>
        </Grid>
    )
};

export default WeatherDesc;