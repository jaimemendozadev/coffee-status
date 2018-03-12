import {GO_BACK_TO} from '../actions/CustomDrink.js';
import {SELECT_DRINK} from '../actions/CustomDrink.js';
import {RENDER_SELECT_TYPE} from '../actions/CustomDrink.js';
import {SELECT_TYPE} from '../actions/CustomDrink.js';
import {RENDER_SELECT_SIZE} from '../actions/CustomDrink.js';
import {SELECT_SIZE} from '../actions/CustomDrink.js'
import {RENDER_SELECT_MILK} from '../actions/CustomDrink.js';
import {SELECT_MILK} from '../actions/CustomDrink.js';
import {RENDER_SELECT_SWEETNESS} from '../actions/CustomDrink.js';
import {SELECT_SWEETNESS} from '../actions/CustomDrink.js';
import {RENDER_SELECT_TOPPINGS} from '../actions/CustomDrink.js';
import {SELECT_TOPPINGS} from '../actions/CustomDrink.js';
import {RENDER_CONFIRMATION} from '../actions/CustomDrink.js';

const defaultDrinkState = {
  current_page: 'selectionPage',
  drink: '',
  type: [],
  selected_size: '',
  selected_milk: '',
  selected_sweetness: [],
  selected_topings: []  
}



const CustomDrink = (state = defaultDrinkState, action) => {
  switch(action.type){
    case GO_BACK_TO:
      console.log("the state in go back to ", state)
      const test = {...state, current_page: action.payload}
      console.log("new state ", test)
      return {...state, current_page: action.payload};

    case SELECT_DRINK:
      return {...state, drink: action.payload};
      
    case RENDER_SELECT_TYPE:
      return {...state, current_page: action.payload};
    
    case SELECT_TYPE: 
      return {...state, type: action.payload };

    case RENDER_SELECT_SIZE:
      return {...state, current_page: action.payload};

    case SELECT_SIZE:
      return {...state, selected_size: action.payload};

    case RENDER_SELECT_MILK:
      return {...state, current_page: action.payload};
    
    case SELECT_MILK:
      return {...state, selected_milk: action.payload};

    case RENDER_SELECT_SWEETNESS:
      return {...state, current_page: action.payload};

    case SELECT_SWEETNESS:
      return {...state, selected_sweetness: action.payload};

    case RENDER_SELECT_TOPPINGS:
      return {...state, current_page: action.payload};
    
    case SELECT_TOPPINGS:
      return {...state, selected_topings: action.payload};
  
    case RENDER_CONFIRMATION:
      return {...state, current_page: action.payload};

  }
  return state;
}


export default CustomDrink;