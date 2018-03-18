import {AUTH_IN_PROGRESS, AUTH_SUCCESS, AUTH_COMPLETED, NOT_AUTHENTICATED} from '../actions/Authentication.js';

const defaultState = {
  isAuthenticated: false,
  currentlyAuthenticating: false,
  errorMessage: ''
}

const Authentication = (state = defaultState, action) => {
    switch(action.type){
      case AUTH_IN_PROGRESS:
        return {...state, currentlyAuthenticating: true};
      
      case AUTH_SUCCESS: 
        return {...state, isAuthenticated: true };  

      case AUTH_COMPLETED:
        return {...state, currentlyAuthenticating: false};
      
      case NOT_AUTHENTICATED:
        //expect error message from server
        return {...state, isAuthenticated: false, errorMessage: action.payload};

    }

    return state;
}

export default Authentication;