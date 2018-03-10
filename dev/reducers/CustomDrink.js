import {SELECT_DRINK} from '../actions/selectDrink.js';

const defaultDrinkState = {
  drink: '',
  type: '',
  selected_size: '',
  selected_milk: '',
  other_options: []  
}



const CustomDrink = (state = defaultDrinkState, action) => {
  console.log("state ", state)
  console.log("action ", action)
  switch(action.type){
    case SELECT_DRINK:
      return {...state, drink: action.payload};
  }
  return state;
}


export default CustomDrink;