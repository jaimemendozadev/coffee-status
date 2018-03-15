import {combineReducers} from 'redux';
import CustomDrink from './CustomDrink.js';
import Authentication from './Authentication.js';

const rootReducer = combineReducers({
  CustomDrink,
  Authentication
});

export default rootReducer;