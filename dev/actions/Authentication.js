import axios from 'axios';
export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_UNAUTHENTICATED = 'NOT_UNAUTHENTICATED';
const API = "http://localhost:3000/api/auth/google";


export const googleLoginSuccess = () => {
 
  console.log("inside googleLogin!");
  
  return (dispatch) => {
    axios.get(API)
      .then(result => {
        console.log("the result is ", result);
      })
      .catch(error => {
        console.log("the error is ", error);
      });
  }

}