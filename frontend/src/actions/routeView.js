import { GET_ERRORS, SET_CURRENT_VIEW } from './types';


export const setCurrentView = viewName => dispatch => {
    localStorage.setItem('viewName', viewName);
    dispatch({
        type: SET_CURRENT_VIEW,
        payload: viewName
    });
}