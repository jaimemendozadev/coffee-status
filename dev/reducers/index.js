import {combineReducers} from 'redux';
import CustomDrink from './CustomDrink.js';
import Authentication from './Authentication.js';
import User from './User.js';

const rootReducer = combineReducers({
  CustomDrink,
  Authentication,
  User
});

export default rootReducer;