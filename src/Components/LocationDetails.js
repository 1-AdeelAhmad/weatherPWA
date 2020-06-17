import React from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';

const useStyle = makeStyles(WeatherStyles)



const LocationDetails = ({setDate, weatherData, location, weatherDataLoaded}) => {

    const classes = useStyle();



    

    // const isWeatherLoaded = 
    //     if(weather) {
    //         Object.assign( weatherOBJ, {
                // temp: <Typography variant='h1'>{Math.round(weather.temp.day)}°C</Typography>,
                // location: '',
                // desc: weather.weather[0].description,
                // sunrise: new Date( weather.sunrise * 1000 ),
                // sunset: new Date( weather.sunset * 1000 )
    //         })
    //     }


        // return weather? 
        //     <Typography variant='h1'>{Math.round(weather.temp.day)}°C</Typography> 
        //    : <Typography variant='h3'>Loading</Typography>
        // }
    

    return(
        <Grid item xs={12} style={{textTransform: 'uppercase'}}>
            <Paper elevation={3} className={classes.paperLocationDetails}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant='h6'>{ setDate }</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {weatherDataLoaded?
                        <Typography variant='h1'> {Math.round(weatherData.temp.day)}°C</Typography>
                        :
                        <Typography variant='h4'>Loading</Typography>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='button'>{ weatherDataLoaded? location : 'Loading'}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h6'>{ weatherDataLoaded? weatherData.weather[0].description : 'Loading'}</Typography>
                    </Grid>
                    <Grid container style={{marginTop: '2rem'}}>
                        <Grid item xs={6}>
                            <Typography variant='button'>Sunrise: { weatherDataLoaded? `${new Date( weatherData.sunrise * 1000).getHours()}:${new Date( weatherData.sunrise * 1000).getMinutes()}`: 'Loading'}</Typography>

                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant='button'>Sunset: { weatherDataLoaded? `${new Date( weatherData.sunset * 1000).getHours()}:${new Date( weatherData.sunset * 1000).getMinutes()}`: 'Loading'}</Typography>
                        </Grid>
                        {/* <Grid container style={{marginTop: '1rem'}}>
                            <Grid item xs={12}>
                                <Typography variant='caption'>Click Here For More Info...</Typography>
                            </Grid>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
};

export default LocationDetails;