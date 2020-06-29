import { CHANGE_SEARCHFIELD,
        REQUEST_WEATHER_PENDING,
        REQUEST_WEATHER_SUCCESS,
        REQUEST_WEATHER_FAILED,
        GET_DATE,
        GET_DAY
    } from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const getRequestWeather = () => (dispatch) => {
    const API_KEY = `6f59aafd13d9cd8666b8c2261057b8fa`;
    const lat = 51.5074;
    const long = 0.1278;

    dispatch({ type: REQUEST_WEATHER_PENDING })
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_WEATHER_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_WEATHER_FAILED, payload: error}))
}

export const setDates = (chosenDay, day) => (dispatch) => {
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
       dispatch({
        type: GET_DATE,
        payload: days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear()
       }) 
       dispatch({
           type: GET_DAY,
           payload: chosenDay
       })
    }

    if(chosenDay === 'tom' ) {
        dispatch({
         type: GET_DATE,
         payload: days[tomorrow().getDay()] + ' ' + tomorrow().getDate() + ' ' + months[tomorrow().getMonth()] + ' ' + tomorrow().getFullYear()
        })
        dispatch({
            type: GET_DAY,
            payload: chosenDay
        })
     }

     if(chosenDay === 'dat' ) {
        dispatch({
         type: GET_DATE,
         payload: days[dayAfterTomorrow().getDay()] + ' ' + dayAfterTomorrow().getDate() + ' ' + months[dayAfterTomorrow().getMonth()] + ' ' + dayAfterTomorrow().getFullYear()
        })
        dispatch({
            type: GET_DAY,
            payload: chosenDay
        })
     }
   
}


export const setDay = (day) => ({
    type: GET_DAY,
    payload: day
})