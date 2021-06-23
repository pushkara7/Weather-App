import { SEARCH_SUCCESS, SEARCH_LOADING, SEARCH_ERROR } from  './constants';

const searchSuccess = (data) => ({
    type: SEARCH_SUCCESS,
    payload: data
});

const searchError = (error) => ({
        type: SEARCH_ERROR,
        payload: error
    });

const searchLoading = (error) => ({
    type: SEARCH_LOADING,
    payload: error
});


export const getData = (data) => (dispatch) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=2b5ab8a421ab47f6a6e192809211002&q=${data}`;
    dispatch(searchLoading(true));
    fetch(url, {
        method: 'GET',
    }).then(response => response.json())
        .then(result => {
            if(result && result.error){
                dispatch(searchError(result.error.message));
            }
            else {
                dispatch(searchSuccess(result));
            }

        }).catch(error => {
            dispatch(searchError(error))
    });
}
