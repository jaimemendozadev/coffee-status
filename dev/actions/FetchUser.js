export const FETCH_USER = 'FETCH_USER';
const APP_API = `${process.env.APP_API}/user`;
import axios from 'axios';

export const fetchUser = () => {
  return (dispatch) => {
    let token = localStorage.getItem('token');

    console.log("the token is ", JSON.stringify(token))

    axios.get(APP_API, {
      headers: { Authorization: 'jwt ' + token }
      //headers: { "Authorization": "bearer " + token }
    })
    .then(serverResults => {
        console.log("fetchUser serverResults are ", serverResults)
      })
      .catch(error => {
        console.log("the fetchUser error from the server ", error);
      });
  }
}

