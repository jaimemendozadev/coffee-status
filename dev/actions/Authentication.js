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
        })
    //   let API_OPTIONS = {
    //     method: 'GET',
    //     mode: 'no-cors'   
    //   };
      
    //   fetch(API, API_OPTIONS)
    //     .then(results => {
    //       //parse JWT into json
    //       return results.json();
    //     })
    //     .then(serverResults => {
  
    //       //save server results in local storage
    //       //dispatch AUTHENTICATED action
    //       console.log("serverResults are ", serverResults)
    //     })
    //     .catch(error => {
    //       //dispatch NOT_AUTHENTICATED action
    //       console.log("the error from the server ", error);
    //     });
    }
}