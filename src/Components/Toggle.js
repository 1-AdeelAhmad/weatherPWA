import React, { useState } from 'react';
import { Grid, Switch, makeStyles } from '@material-ui/core';


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

    return(
        <Grid item xs={6}>
            <div className={classes.margin}>
                <Grid container alignItems='flex-end' direction='column' >
                    <Grid item xs={12}>
                    <Switch
                        checked={toggleOn}
                        onChange={handleToggleSwitch}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
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