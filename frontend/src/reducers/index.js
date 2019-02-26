import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import viewRouteReducer from './viewRouteReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    viewRouteReducer: viewRouteReducer
});