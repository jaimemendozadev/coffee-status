import axios from 'axios';
export const FETCH_USER = 'FETCH_USER';
const APP_API = `${process.env.APP_API}/user`;



export const fetchUser = () => {
  return (dispatch) => {
    let token = localStorage.getItem('token');

    axios.post(APP_API, {
      token
    })
    .then(serverResults => {
        console.log("fetchUser serverResults are ", serverResults)
        
        const {data} = serverResults;

        const userProfile = {
          first_name: data.first_name,
          last_name: data.last_name,
          profile_image_url: data.profile_image_url,
          email: data.email,
          phone_number: data.phone_number  
        }

        dispatch({type: FETCH_USER, payload: userProfile});

      })
      .catch(error => {
        console.log("the fetchUser error from the server ", error);
      });
  }

}

