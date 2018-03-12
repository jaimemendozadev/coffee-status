import React from 'react';
import {connect} from 'react-redux';

const DisplaySelection = ({ current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings }) => (
  <div>
    <h1>Create a Custom Drink</h1>
    <div>
      <h1>You've currently selected:</h1>
      <ul>
        <li>Drink: {drink}</li>
        <li>Type: {!type ? '' : type.join(" ")}</li>
        <li>Size: {selected_size}</li>
        <li>Milk Type: {selected_milk}</li>
        <li>Sweetness Type &amp; Quantity: {!selected_sweetness ? '' : selected_sweetness.join(" ")}</li>
        <li>Optional Topings: {!selected_topings ? '' : selected_topings.join(" ")}</li>
      </ul>
    </div>
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

export default connect(mapStateToProps, null)(DisplaySelection);
