import { SET_CURRENT_VIEW } from '../actions/types';

const initialState = {
    currentView: "Dashboard"
}

export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_VIEW:
            return {
                ...state,
                currentView: action.payload,
            }
        default: 
            return state;
    }
}