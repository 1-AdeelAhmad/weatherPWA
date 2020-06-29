import React, { useState } from 'react';
import { Grid, Switch, makeStyles, Typography, FormGroup, FormControlLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
  margin: {
      marginTop: theme.spacing(3),
  },

}));


const Toggle = () => {

    const classes = useStyles()

    const [toggleOn, setToggleOn ] = useState(true)

    const handleToggleSwitch = e => {
        setToggleOn(!toggleOn)
        console.log(toggleOn)
    }

    const toggleText = () => {
        return <Typography variant='button'>{toggleOn? 'Light' : 'Dark'}</Typography>
    }  

    return(
        <Grid item xs={3}>
            <div className={classes.margin}>
                <Grid container alignItems='flex-end' >
                    <Grid item xs={12}>
                    <FormControl component='fieldset'>
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="bottom"
                        control={<Switch onClick={handleToggleSwitch} color="primary" />}
                        label={toggleText()}
                        labelPlacement="bottom"
                      />
                      </FormGroup>
                    </FormControl>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Typography style={{fontSize: '.6rem'}} variant='button'> { toggleOn?  'Light' : 'Dark' }</Typography>
                    </Grid> */}
                    
                </Grid>
            </div>
        </Grid>
    )
};

export default Toggle;