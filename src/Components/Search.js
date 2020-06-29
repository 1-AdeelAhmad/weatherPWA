import React from 'react';
import { Grid, makeStyles, TextField, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/DoubleArrowRounded';
import LocationIcon from '@material-ui/icons/MyLocation';

const useStyles = makeStyles((theme) => ({
    
    margin: {
        marginTop: theme.spacing(2),
        // borderRadius: '10px',
        // background: '#ecf0f3',
        // boxShadow: 'inset 3px 3px 5px #8e9092,inset -3px -3px 5px #ffffff',
        padding: '.5rem',
    }
  }));

  

const Search = ({searchWeather, onHandleSearchChange, getLocation}) => {
    const classes = useStyles();


      const getUserLocation = () => {
        getLocation()
      };


    return(
            <form onSubmit={searchWeather} >
                <div className={classes.margin}>
                    <Grid container spacing={1} justify='space-evenly' alignItems="flex-end">
                        <Grid item xs={1}>
                            <SearchIcon />
                        </Grid>
                        <Grid item xs={5}>
                            <TextField
                                onChange={onHandleSearchChange} 
                                id="search"
                                label="Search"
                                />
                        </Grid>
                        <Grid item xs={2}>
                            <Button type='submit'><SendIcon/></Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button onClick={getUserLocation}><LocationIcon/></Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
    )
};

export default Search;