import React, {useEffect, useState} from 'react';
import { Grid, Paper, makeStyles, Typography } from '@material-ui/core';
import { WeatherStyles } from './WeatherStyles';
import WeatherIcon from './WeatherIcon';
import WeatherWind from './WeatherWind';

const useStyle = makeStyles(WeatherStyles)

const initialWeather = {
    temp: 0,
    sunrise: null,
    sunset: null,
    location: null,
    description: null,
    wind: null,
    icon: null
}

const LocationDetails = ({getDate, isPending, getDay, weatherData, location, weatherDataLoaded}) => {

    const classes = useStyle();
    const [ weather, setWeather ] = useState({...initialWeather});
    const [ weatherLoaded, setWeatherLoaded ] = useState(false);



    useEffect( () => {
        if(!isPending) {
            switch(getDay){
                case 'today':
                    setWeatherLoaded(true)
                    const newWeatherOBJ = {
                        temp: weatherData.current.temp,
                        sunrise: new Date(weatherData.current.sunrise * 1000),
                        sunset: new Date(weatherData.current.sunset * 1000),
                        location: null,
                        description: weatherData.current.weather[0].description,            
                        wind: 
                            {
                                windDirection: weatherData.current.wind_deg,
                                windSpeed: weatherData.current.wind_speed
                            },
                        icon: weatherData.current.weather[0].icon
                      }
                      return setWeather(newWeatherOBJ)
                case 'tom':
                    setWeatherLoaded(true)
                    const newWeatherOBJ2 = {
                        temp: weatherData.daily[1].temp.day,
                        sunrise: new Date(weatherData.daily[1].sunrise * 1000),
                        sunset: new Date(weatherData.daily[1].sunset * 1000),
                        location: null,
                        description: weatherData.daily[1].weather[0].description,
                        wind: 
                            {
                                windDirection: weatherData.daily[1].wind_deg,
                                windSpeed: weatherData.daily[1].wind_speed
                            },
                        icon: weatherData.daily[1].weather[0].icon
                      }
                      return setWeather(newWeatherOBJ2)
                case 'dat':
                    setWeatherLoaded(true)
                    const newWeatherOBJ3 = {
                        temp: weatherData.daily[2].temp.day,
                        sunrise: new Date(weatherData.daily[2].sunrise * 1000),
                        sunset: new Date(weatherData.daily[2].sunset * 1000),
                        location: null,
                        description: weatherData.daily[2].weather[0].description,
                        wind: 
                            {
                                windDirection: weatherData.daily[2].wind_deg,
                                windSpeed: weatherData.daily[2].wind_speed
                            },
                        icon: weatherData.daily[2].weather[0].icon
                      }
                      return setWeather(newWeatherOBJ3)
                default:
                    return setWeather({...initialWeather})
            }
        }
    },[setWeather, getDay, isPending, weatherData] )


    return(
            <Paper elevation={3} className={classes.paperLocationDetails}>
            <Grid container spacing={2} >
                    <Grid container justify='center' spacing={3}>
                    <Grid item xs={4}>
                        <WeatherIcon icon={weather.icon} weatherLoaded={weatherLoaded} />
                    </Grid>
                    <Grid item xs={4}>
                        <WeatherWind wind={weather.wind} weatherLoaded={weatherLoaded} />   
                    </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='button'>{ getDate }</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {weatherLoaded?
                        <Typography variant='h2'> {Math.round(weather.temp)}°C</Typography>
                        :
                        <Typography variant='h4'>Loading</Typography>
                        } 
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='button'>{ weatherDataLoaded? location : 'Loading'}</Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <div style={{position: 'absolute', width: '100%', display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                <Paper ><Button>Left</Button></Paper>
                                <Paper ><Button>Right</Button></Paper>
                        </div>
                    </Grid> */}
                    <Grid item xs={12}>
                        <Typography style={{textTransform:'uppercase'}} variant='h6'>{ weatherLoaded? weather.description : 'Loading'}</Typography>
                    </Grid>
                    <Grid container style={{marginTop: '.5rem'}}>
                        <Grid item xs={6}>
                            <Typography variant='button'>Sunrise: { weatherLoaded? `${new Date( weather.sunrise).getHours()}:${new Date( weather.sunrise).getMinutes()}`: 'Loading'}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Typography variant='button'>Sunset: { weatherLoaded? `${new Date( weather.sunset).getHours()}:${new Date( weather.sunset).getMinutes()}`: 'Loading'}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
    )
};

export default LocationDetails;