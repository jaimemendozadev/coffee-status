const API = 'http://localhost:7000';

export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_UNAUTHENTICATED = 'NOT_UNAUTHENTICATED';


export const googleLogin = () => {
    let API_OPTIONS = {
      method: 'POST',
      headers : new Headers({'Content-Type': 'application/json'})    
    };
  
      fetch(API, API_OPTIONS)
        .then(results => {
          return results.json();
        })
        .then(serverResults => {
          console.log("serverResults are ", serverResults)
        })
        .catch(error => {
          console.log("the error from the server ", error);
        });
}