import { CHANGE_SEARCHFIELD,
    REQUEST_WEATHER_PENDING,
    REQUEST_WEATHER_SUCCESS,
    REQUEST_WEATHER_FAILED,
    GET_DATE,
    GET_DAY
} from './constants';

const initialStateSearch = {
    searchField: '',
}

const initialStateWeather = {
    isPending: true,
    weatherData: null,
    error: null
}

const initialStateDate = {
    getDate: null,
}

const initialStateDay = {
    getDay: 'today'
}

export const searchLocation = (state = initialStateSearch, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return { ...state, searchField: action.payload }
        default: 
            return state;
    }
}

export const requestWeather = (state = initialStateWeather, action={}) => {
    switch(action.type){
        case REQUEST_WEATHER_PENDING:
            return { ...state, isPending: true };
        case REQUEST_WEATHER_SUCCESS:
            return { ...state,  weatherData: action.payload, isPending: false }
        case REQUEST_WEATHER_FAILED:
            return { ...state, error: action.payload}
        default: 
            return state;
    }
}

export const requestDate = (state = initialStateDate, action = {}) => {
    switch(action.type){
        case GET_DATE:
            return { ...state, getDate : action.payload }
        default:
            return state;
    }
}

export const requestDay = (state = initialStateDay, action = {}) => {
    switch(action.type){
        case GET_DAY:
            return { ...state, getDay: action.payload }
        default:
            return state;
    }
}

// export const weatherDay = (state = initialState, action = {}) => {
//     switch(action.type) {
//         case GET_DAY:
//             return { ...state, day: action.payload}
//         default:
//             return state;
//     }
// }