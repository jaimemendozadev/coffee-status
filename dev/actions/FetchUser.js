export const FETCH_USER = 'FETCH_USER';
const API = `${process.env.DB_API}/fetchuser`;

export const fetchUser = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    let API_OPTIONS = {
      method: 'POST',
      headers : new Headers({'authorization': `${token}`})
    };
  
    fetch(API, API_OPTIONS)
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

