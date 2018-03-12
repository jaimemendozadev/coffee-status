import {SELECT_DRINK} from '../actions/selectDrink.js';
import {RENDER_SELECT_TYPE} from '../actions/renderSelectType.js';
import {SELECT_TYPE} from '../actions/selectType.js';
import {RENDER_SELECT_SIZE} from '../actions/renderSelectSize.js';
import {SELECT_SIZE} from '../actions/selectSize.js'
import {RENDER_SELECT_MILK} from '../actions/renderSelectMilk.js';

const defaultDrinkState = {
  current_page: 'selectionPage',
  drink: '',
  type: [],
  selected_size: '',
  selected_milk: '',
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

  }
  return state;
}


export default CustomDrink;