import axios from 'axios';
export const AUTH_IN_PROGRESS = 'AUTH_IN_PROGRESS';

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_COMPLETED = 'AUTH_COMPLETED'

export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
const API = "http://localhost:3000/api/auth/google";

export const authPromise = new Promise((resolve, reject) => {
  resolve("Auth Completion Starts");
}); 


export const authInProgress = () => {
  return {
    type: AUTH_IN_PROGRESS 
  }
}


export const authSuccess = (token) => {
  localStorage.setItem('token', token);

  return {
    type: AUTH_SUCCESS
  }
  
}

export const authCompleted = () => {
  return {
    type: AUTH_COMPLETED
  }
}

export const authFailure = () => {
  return {
    type: NOT_AUTHENTICATED,
    payload: "There was an error logging into Google. Please try again."
  }

}