import {AUTHENTICATED, NOT_UNAUTHENTICATED} from '../actions/Authentication.js';

const defaultState = {
  isAuthenticated: false,
  errorMessage: ''
}

const Authentication = (state = defaultState, action) => {
    switch(action.type){
      case AUTHENTICATED:
        return {...state, isAuthenticated: true };
      
      case NOT_UNAUTHENTICATED:
        //expect error message from server
        return {...state, isAuthenticated: false, errorMessage: action.payload};

    }

    return state;
}

export default Authentication;