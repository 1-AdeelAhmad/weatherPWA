import React from 'react';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/DoubleArrowRounded';
import LocationIcon from '@material-ui/icons/MyLocation';

const useStyles = makeStyles((theme) => ({
    
    margin: {
        marginTop: theme.spacing(3),
        borderRadius: '10px',
        background: '#ecf0f3',
        boxShadow: 'inset 5px 5px 10px #8e9092,inset -5px -5px 10px #ffffff',
        padding: '.5rem',
    },
    dropDown: {
        borderRadius: '20px',
        opactiy: '0.25'
    }
  }));

  

const Search = ({searchWeather, onHandleSearchChange, getLocation}) => {
    const classes = useStyles();


      const getUserLocation = () => {
        getLocation()
      };


    return(
        <Grid item xs={6} style={{position: 'relative'}}>
            <form onSubmit={searchWeather} >
                <div className={classes.margin}> 
                        <Grid container spacing={1} alignItems='flex-end' alignContent="space-between">
                            <Grid item xs={2} >
                                <SearchIcon />
                            </Grid>
                            <Grid item xs={7} >
                                <TextField  
                                    style={{marginTop: '-.5rem', paddingRight: '.5rem'}} 
                                    onChange={onHandleSearchChange} 
                                    id="search"
                                    placeholder='Search'
                                    />
                            </Grid>
                            <Grid item xs={2} >
                                <Button type='submit'><SendIcon/></Button>
                                {/* <Button onClick={getUserLocation}><SendIcon/></Button> */}
                            </Grid>
                            <Grid item xs={1} >
                                {/* <Button type='submit'><SendIcon/></Button> */}
                                <Button onClick={getUserLocation}><LocationIcon/></Button>
                            </Grid>
                                
                        </Grid>
                </div>
            </form>
        </Grid>
    )
};

export default Search;