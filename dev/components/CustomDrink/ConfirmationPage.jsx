import React from 'react';
import {goBackTo} from '../../actions/CustomDrink.js';
import {connect} from 'react-redux';

const ConfirmationPage = ({ current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings, goBackTo }) => (

  <div>
    <h1>Click on any of the links to change your selection:</h1>
    <ul>
      <li onClick={() => goBackTo('selectionPage')}><a href="#">Choose a Different Drink</a></li>
      <li onClick={() => goBackTo('selectType')}><a href="#">Choose a Different Drink Type</a></li>
      <li onClick={() => goBackTo('toggleSize')}><a href="#">Pick a New Size</a></li>
      <li onClick={() => goBackTo('toggleMilk')}><a href="#">Choose a Different Milk Type</a></li>
      <li onClick={() => goBackTo('toggleSweet')}><a href="#">Adjust the Sweetness Type &amp; Quantity</a></li>
      <li onClick={() => goBackTo('toggleToppings')}><a href="#">Pick Different Kind of Topings</a></li>
    </ul>
  </div>
  
);

function mapStateToProps({ CustomDrink: {current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings } }){
  return { 
    current_page, 
    drink, 
    type, 
    selected_size, 
    selected_milk, 
    selected_sweetness, 
    selected_topings
  }
}

export default connect(mapStateToProps, {goBackTo})(ConfirmationPage);


//'selectionPage', 'selectType', 'toggleSize', 'toggleMilk', 'toggleSweet', 'toggleToppings', 'confirmationPage'