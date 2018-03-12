import React from 'react';
import {goBackTo} from '../../actions/CustomDrink.js';
import {connect} from 'react-redux';

const ConfirmationPage = ({ current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings, goBackTo }) => (

  <div>
    <h1>Click on any of the links to change your selection:</h1>
    <ul>
      <li onClick={() => goBackTo('selectionPage')}><a href="#">Choose a Different Drink</a></li>
      <li onClick={() => goBackTo('selectType')}><a href="#">Choose a Different Drink Type</a></li>
      <li onClick={() => goBackTo('toggleSize')}>Pick a New Size</li>
      <li onClick={() => goBackTo('toggleMilk')}>Choose a Different Milk Type</li>
      <li onClick={() => goBackTo('toggleSweet')}>Adjust the Sweetness Type &amp; Quantity</li>
      <li onClick={() => goBackTo('toggleToppings')}>Pick Different Kind of Topings</li>
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