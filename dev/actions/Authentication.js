const API = 'http://localhost:3000/api/auth/google';
import axios from 'axios';

export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_UNAUTHENTICATED = 'NOT_UNAUTHENTICATED';


export const googleLogin = () => {
    
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