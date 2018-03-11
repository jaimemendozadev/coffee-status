import {SELECT_DRINK} from '../actions/selectDrink.js';
import {RENDER_SELECT_TYPE} from '../actions/renderSelectType.js';

const defaultDrinkState = {
  current_page: 'selectionPage',
  drink: '',
  type: '',
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
  }
  return state;
}


export default CustomDrink;