import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducer from './ducks/reducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware = [thunk];

const  rootReducer = combineReducers({
    data: reducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
