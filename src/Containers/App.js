import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../actions';
import Search from '../Components/Search';
import { Styles } from './Styles';
import { Grid, Paper, withStyles } from '@material-ui/core';
import Toggle from '../Components/Toggle';
import WeatherIcon from '../Components/WeatherIcon';
import WeatherWind from '../Components/WeatherWind';
import LocationDetails from '../Components/LocationDetails';
import WeatherToday from '../Components/WeatherToday';
import WeatherTom from '../Components/WeatherTom';
import WeatherDayAfterTom from '../Components/WeatherDayAfterTom';

const API_KEY = `6f59aafd13d9cd8666b8c2261057b8fa`;

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onHandleSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component{
    constructor(){
        super()
        this.state = {
            searchLocation: '',
            currentSelected: 'today',
            weatherDataLoaded: false,
            setDate: '',
            currentLatPosition: '',
            currentLondPosition: '', 
            weatherData: '',
            location: '',
        }
    }

    onHandleSelected = (e) => {
        this.setState({currentSelected: e.target.id})
        this.calculateDate(e.target.id)
    }

    searchWeather = (e) => {
        e.preventDefault()
        this.setState({
            searchLocation: this.props.searchField
        })
        console.log('Get This', this.props.searchField)
        this.getCoords(this.props.searchField)
    }


    componentDidMount = async () => {
        await this.calculateDate(this.state.currentSelected)
        await this.getLocation()
        // await this.getAllData(this.state.currentLatPosition, this.state.currentLondPosition)
    }
  
    getLocation = async () => {
       if(navigator.geolocation){
           await navigator.geolocation.getCurrentPosition(this.showPosition, this.showPositionError )
       } 
       
    }

    showPositionError = error => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              alert("Please Enable Location For Accurate Weather Reports")
              break;
            case error.POSITION_UNAVAILABLE:
              alert("Location information is unavailable.")
              break;
            case error.TIMEOUT:
              alert("The request to get user location timed out.")
              break;
            case error.UNKNOWN_ERROR:
              alert("An unknown error occurred.")
              break;
            default :
            alert('Unavailable')
          }
    }

    showPosition =  position => {
        this.setState({
            currentLatPosition: position.coords.latitude,
            currentLondPosition: position.coords.longitude
        })
        console.log('Got the Coords')

        this.getWeatherGeo(position.coords.latitude, position.coords.longitude )
        this.getLoctionFromCoords(position.coords.latitude, position.coords.longitude )
        

    }

    //Get location name if data from Coords
    getLoctionFromCoords = async (lat, long) => {
        const url =  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=6190521cf6754408a69404ac72161310`;
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            location: data.results[0].components.suburb
        })
    }


    //Get Lat & Long Coords if Search Bar Is Used

    getCoords = async (location) => {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=6190521cf6754408a69404ac72161310`;
        const response = await fetch(url)
        const data = await response.json()
        this.setState({
            currentLatPosition: data.results[0].geometry.lat,
            currentLondPosition: data.results[0].geometry.lng,
            location
        })
        await this.getWeatherGeo(data.results[0].geometry.lat, data.results[0].geometry.lng)
    }


    getWeatherGeo = async (lat, long) => {
        this.setState({
            weatherDataLoaded: false
        })
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&units=metric&appid=${API_KEY}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.daily[0])
        
        if(this.state.currentSelected === 'today' ) {
            this.setState({
                weatherData: data.daily[0],
                weatherDataLoaded: true
            })
        } else if(this.state.currentSelected === 'tomorrow') {
            this.setState({
                weatherData: data.daily[1],
                weatherDataLoaded: true
            })
        } if(this.state.currentSelected === 'dayAfterTomorrow') {
            this.setState({
                weatherData: data.daily[2],
                weatherDataLoaded: true
            })
        }
    }

    
    calculateDate = (chosenDay) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const date = new Date()
        const tomorrow = () => {
            const x = new Date();
            x.setDate(new Date().getDate()+1);
            return x
        }
        const dayAfterTomorrow = () => {
            const x = new Date();
            x.setDate(new Date().getDate()+2);
            return x
        }

        if(chosenDay === 'today' ) {
            this.setState({
                setDate : days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
            })
        } else if( chosenDay === 'tomorrow' ) {
             this.setState({
                 setDate: days[tomorrow().getDay()] + ' ' + tomorrow().getDate() + ' ' + months[tomorrow().getMonth()] + ' ' + tomorrow().getFullYear() 
             })
        } else if(chosenDay === 'dayAfterTomorrow'){
            this.setState({
                setDate: days[dayAfterTomorrow().getDay()] + ' ' + dayAfterTomorrow().getDate() + ' ' + months[dayAfterTomorrow().getMonth()] + ' ' + dayAfterTomorrow().getFullYear()  
            })
        }

        if(this.state.currentLatPosition && this.state.currentLondPosition){
            this.getWeatherGeo(this.state.currentLatPosition, this.state.currentLondPosition)
        }
    }

    

    render(){
        const { classes, onHandleSearchChange } = this.props;
        const { weatherData, weatherDataLoaded, setDate, currentSelected } = this.state;

        return(
                <Grid container style={{margin: '0 auto', backgroundColor: '#ecf0f3'}}>
                    <Grid item xs={12} className={classes.root}>
                        <Paper elevation={0} className={classes.paper} style={{backgroundColor: '#ecf0f3'}}>
                            <Grid container style={{height: '100%'}}>
                                <Search 
                                    searchWeather={this.searchWeather} 
                                    onHandleSearchChange={onHandleSearchChange}
                                    getLocation={this.getLocation}
                                />
                                <Toggle/>
                                <Grid container spacing={5}>
                                    <WeatherIcon weatherData={weatherData} weatherDataLoaded={weatherDataLoaded}/>
                                    <WeatherWind weatherData={weatherData} weatherDataLoaded={weatherDataLoaded}/>
                                </Grid>
                                <LocationDetails 
                                    setDate={setDate}
                                    location={this.state.location}
                                    weatherData={weatherData}
                                    currentSelected={currentSelected}
                                    weatherDataLoaded={weatherDataLoaded}
                                />
                                <Grid container spacing={3}>
                                    <WeatherToday onHandleSelected={this.onHandleSelected} currentSelected={this.state.currentSelected}/>
                                    <WeatherTom onHandleSelected={this.onHandleSelected} currentSelected={this.state.currentSelected} / >
                                    <WeatherDayAfterTom onHandleSelected={this.onHandleSelected} currentSelected={this.state.currentSelected}/>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(Styles)(App));