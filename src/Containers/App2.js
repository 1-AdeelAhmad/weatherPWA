import React from 'react';
import { connect } from 'react-redux';
import { setSearchField, getRequestWeather, setDates} from '../actions';
import { Container, Grid, Paper } from '@material-ui/core';
import Search from '../Components/Search';
import Toggle from '../Components/Toggle';
import LocationDetails from '../Components/LocationDetails';
import WeatherToday from '../Components/WeatherToday';
import WeatherTom from '../Components/WeatherTom';
import WeatherDayAfterTom from '../Components/WeatherDayAfterTom';

// const API_KEY = `6f59aafd13d9cd8666b8c2261057b8fa`;

const mapStateToProps = state => {
    return {
        searchField: state.searchLocation.searchField,
        weatherData: state.requestWeather.weatherData,
        isPending: state.requestWeather.isPending,
        error: state.requestWeather.error,
        getDate: state.requestDate.getDate,
        getDay: state.requestDay.getDay
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onHandleSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // onHandleSetDay: (event) => dispatch(setDay(event.target.id)),
        onRequestWeather: () => dispatch(getRequestWeather()),
        onRequestDate: (day) => dispatch(setDates(day)),
    }
}

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            getDay: 'today'
        }
    }

    componentDidMount(){
        this.props.onRequestWeather()
        this.props.onRequestDate('today')
    }

    searchWeather = (e) => {
        e.preventDefault()
        console.log('Get This', this.props.searchField)
    }

    render(){

        const { onHandleSearchChange, weatherData, isPending, getDay, onHandleSetDay, onRequestDate, getDate  } = this.props;

        return(
            <Container maxWidth='xs'>
            
                <Paper elevation={0} style={{ backgroundColor: '#ecf0f3', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                        {/* <button onClick={ () => this.props.onRequestDate('tom') }>Click</button> */}
                            <Search 
                                onHandleSearchChange={onHandleSearchChange}
                                searchWeather={this.searchWeather}
                            />
                            
                        </Grid>
                        <Grid item xs={4}>
                            <Toggle/>   
                        </Grid>
                    </Grid>
                    {/* <Grid container justify='space-between' spacing={3}>
                        <Grid item xs={6}>
                            <WeatherIcon/>
                        </Grid>
                        <Grid item xs={6}>
                            <WeatherWind/>   
                        </Grid>
                    </Grid> */}
                    <Grid container>
                        <Grid item xs={12}>
                            <LocationDetails isPending={isPending} getDay={getDay} weatherData={weatherData} getDate={getDate}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{marginBottom: '2rem'}}>
                        <Grid item xs={4}>
                            <WeatherToday getDay={getDay} onRequestDate={onRequestDate} onHandleSetDay={onHandleSetDay}/>
                        </Grid>
                        <Grid item xs={4}>
                            <WeatherTom getDay={getDay}  onRequestDate={onRequestDate} onHandleSetDay={onHandleSetDay}/>    
                        </Grid>
                        <Grid item xs={4}>
                            <WeatherDayAfterTom getDay={getDay} onRequestDate={onRequestDate} onHandleSetDay={onHandleSetDay}/>    
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);