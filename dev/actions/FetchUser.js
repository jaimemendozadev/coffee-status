export const FETCH_USER = 'FETCH_USER';
const APP_API = `${process.env.APP_API}/user`;

export const fetchUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    let API_OPTIONS = {
      method: 'GET',
      headers: {'authorization': `${token}`}
    };
  
    fetch(APP_API, API_OPTIONS)
      .then(results => {
        return results.json();
      })
      .then(serverResults => {
        console.log("fetchUser serverResults are ", serverResults)
      })
      .catch(error => {
        console.log("the fetchUser error from the server ", error);
      });
    
  }
}

