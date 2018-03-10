import React from 'react';
import {selectDrink} from '../../actions/selectDrink.js';
import {connect} from 'react-redux';

const SelectionPage = ({selectDrink}) => (
  <div>
    <h1>What Drink Would You Like?</h1>
    <button onClick={() => selectDrink("Coffee")}>Coffee</button>
    <button onClick={() => selectDrink("Tea")}>Tea</button>
  </div>
)

export default connect(null, {selectDrink})(SelectionPage);