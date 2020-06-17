import React, { useState, useEffect } from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({currentSelected, onHandleSelected}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(false);

    useEffect( () => {
        if(currentSelected === 'tomorrow') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[currentSelected] )
    

    return(
        <Grid  item xs={4} className={classes.root} >
            <Paper 
                onClick={onHandleSelected} 
                id='tomorrow' 
                className={ select ? classes.paperSelected : classes.paper}
                    >
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='button'>tomorrow</Typography>
                        <Typography variant='h6'>{new Date().getDate()+1}</Typography>
                    </div>
                       
            </Paper>
        </Grid>
    )
};

export default WeatherToday;