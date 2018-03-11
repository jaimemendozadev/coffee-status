import React from 'react';
import {selectDrink} from '../../actions/selectDrink.js';
import {renderSelectType} from '../../actions/renderSelectType.js';
import {connect} from 'react-redux';




const SelectionPage = ({drink, selectDrink, renderSelectType}) => (
  <div className="SelectionPage">
    <h1>What Drink Would You Like?</h1>
    <div className="button-container">
      <button onClick={() => selectDrink("Coffee")}>Coffee</button>
      <button onClick={() => selectDrink("Tea")}>Tea</button>
      {drink ? <button onClick={() => renderSelectType()}>Select the Type of {drink}</button> : null}
    </div>
  </div>
)
function mapStateToProps({CustomDrink: {drink}}){
  return {
    drink
  }
}
export default connect(mapStateToProps, {selectDrink, renderSelectType})(SelectionPage);