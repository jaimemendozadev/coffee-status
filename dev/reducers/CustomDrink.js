import {SELECT_DRINK} from '../actions/selectDrink.js';
import {RENDER_SELECT_TYPE} from '../actions/renderSelectType.js';
import {SELECT_TYPE} from '../actions/selectType.js';
import {RENDER_SELECT_SIZE} from '../actions/renderSelectSize.js';
import {SELECT_SIZE} from '../actions/selectSize.js'
import {RENDER_SELECT_MILK} from '../actions/renderSelectMilk.js';
import {SELECT_MILK} from '../actions/selectMilk.js';
import {RENDER_SELECT_SWEETNESS} from '../actions/renderSelectSweetness.js';
import {SELECT_SWEETNESS} from '../actions/selectSweetness.js';
import {RENDER_SELECT_TOPPINGS} from '../actions/renderSelectToppings';

const defaultDrinkState = {
  current_page: 'selectionPage',
  drink: '',
  type: [],
  selected_size: '',
  selected_milk: '',
  selected_sweetness: [],
  other_options: []  
}



const CustomDrink = (state = defaultDrinkState, action) => {
  switch(action.type){
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

  }
  return state;
}


export default CustomDrink;