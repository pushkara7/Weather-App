import {SEARCH_SUCCESS, SEARCH_LOADING, SEARCH_ERROR } from './constants';

const initialState = {
  weatherInfo: {},
  locationInfo: {},
    loading: false,
    apiError: '',
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case SEARCH_SUCCESS:
            return {
                weatherInfo: action.payload.current,
                locationInfo: action.payload.location,
                loading: false,
                apiError: ''
            }
        case SEARCH_LOADING:
            return {
                weatherInfo: {},
                locationInfo: {},
                loading: action.payload,
                apiError: ''
            }
        case SEARCH_ERROR:
            return {
                weatherInfo: {},
                locationInfo: {},
                apiError: action.payload,
                loading: false,
            }
        default:
            return state;

    }
}

export default reducer;
