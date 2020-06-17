import React, { useState, useEffect } from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({currentSelected, onHandleSelected}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(false);

    useEffect( () => {
        if(currentSelected === 'dayAfterTomorrow') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[currentSelected] )

    const calculateDay = () => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[new Date().getDay()+2]
    }

    return(
        <Grid item xs={4} className={classes.root} >
            <Paper 
                onClick={onHandleSelected} 
                id='dayAfterTomorrow' 
                className={ select ? classes.paperSelected : classes.paper}
                    >
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='button'>{calculateDay()}</Typography>
                        <Typography variant='h6'>{new Date().getDate()+2}</Typography> 
                    </div>
                        
            </Paper>        
        </Grid>
    )
};

export default WeatherToday;