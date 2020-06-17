import { CHANGE_SEARCHFIELD } from './constants';

const initialState = {
    searchField: ''
}

export const searchLocation = (state = initialState, action = {}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return { ...state, searchField: action.payload }
        default: 
            return state;
    }
}