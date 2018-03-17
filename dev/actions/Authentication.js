import axios from 'axios';
export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_UNAUTHENTICATED = 'NOT_UNAUTHENTICATED';
const API = "http://localhost:3000/api/auth/google";


export const authSuccess = (token, callback) => {

  return (dispatch) => {
    
    localStorage.setItem('token', token);
    
    dispatch({type: AUTHENTICATED});

    callback('/');
  }
  
}


export const authFailure = () => {
  return {
    type: NOT_UNAUTHENTICATED,
    payload: "There was an error logging into Google. Please try again."
  }

}