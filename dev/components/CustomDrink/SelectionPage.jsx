import React from 'react';
import {connect} from 'react-redux';
import {selectDrink} from '../../actions/CustomDrink.js';
import {renderSelectType} from '../../actions/CustomDrink.js';
import {renderConfirmation} from '../../actions/CustomDrink.js';




const SelectionPage = ({drink, arrive_at_confirmation, selectDrink, renderSelectType, renderConfirmation}) => (
  <div className="SelectionPage">

    <h1>What Drink Would You Like?</h1>

    <div className="button-container">
      <button onClick={() => selectDrink("Coffee")}>Coffee</button>
      
      <button onClick={() => selectDrink("Tea")}>Tea</button>
      
      <div>
        {arrive_at_confirmation ? <button onClick={() => renderConfirmation()}>Go Back to Confirm Saved Changes</button> : null}
        {drink ? <button onClick={() => renderSelectType()}>Select the Type of {drink}</button> : null}
      </div>
    </div>

  </div>
)

function mapStateToProps({CustomDrink: {drink, arrive_at_confirmation}}){
  return {
    drink,
    arrive_at_confirmation
  }
}
export default connect(mapStateToProps, {selectDrink, renderSelectType, renderConfirmation})(SelectionPage);