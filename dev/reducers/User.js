import {FETCH_USER} from '../actions/FetchUser.js';

const defaultState = {
  social_id: '', 
  first_name: '', 
  last_name: '',
  email: '',
  profile_image_url: '',
  phone_number: '',
  fetchedUser: false,
  server: {error: false, message: ''} 
}

const User = (state = defaultState, action) => {
  switch(action.type){
    case FETCH_USER:
      return {...state, fetchedUser: true, ...action.payload};
  }

  return state;
}

export default User;