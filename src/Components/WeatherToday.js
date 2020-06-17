import React, { useState, useEffect  } from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyles = makeStyles(WeatherStyles)

const WeatherToday = ({currentSelected, onHandleSelected}) => {

    const  classes  = useStyles()
    const [select, setSelect] = useState(true);

    useEffect( () => {
        if(currentSelected === 'today') {
            setSelect(true)
        } else {
            setSelect( false)
        }
    },[currentSelected] )

    
    return(
        <Grid  item xs={4} className={classes.root} >
            <Paper 
                onClick={onHandleSelected} 
                id='today' 
                className={ select ? classes.paperSelected : classes.paper}
                    >
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Typography variant='button'>Today</Typography>
                        <Typography variant='h6'>{new Date().getDate()}</Typography>   
                    </div> 
            </Paper>        
        </Grid>
    )
};

export default WeatherToday;