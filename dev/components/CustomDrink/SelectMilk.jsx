import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBackTo} from '../../actions/CustomDrink.js';
import {selectMilk} from '../../actions/CustomDrink.js';
import {renderInputFields} from '../utils.jsx';
import {handleInputChange} from '../utils.jsx';
import {renderErrorMessage} from '../utils.jsx';
import {renderSelectSweetness} from '../../actions/CustomDrink.js';


class SelectMilk extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Low Fat Milk": false,
      "2% Milk": false,
      "Whole Milk": false,
      "Coconut Milk": false,
      "Almond Milk": false,
      "Soy Milk": false,
      "No Milk": false,
      "madeSelection": false,
      "errorMessage": ''
    }

    this.renderSweetButton = this.renderSweetButton.bind(this);
  }


  renderSweetButton(){
    const {renderSelectSweetness} = this.props;
    
    if (this.state.madeSelection){
     return <button onClick={() => renderSelectSweetness()}>Select Level of Sweetness</button>;
    }
  }

  render(){
    const MilkTypes = ["Low Fat Milk", "2% Milk", "Whole Milk", "Coconut Milk", "Almond Milk", "Soy Milk", "No Milk"];
    const {goBackTo, selectMilk} = this.props;

    return (
      <form>
        <h1>Select the Type of Milk for Your Drink</h1>
        <fieldset>
          <legend>Milk</legend>
            {renderInputFields(MilkTypes, this.state, this.setState.bind(this), handleInputChange, selectMilk, "milk")}
      
        </fieldset>  
    
        {renderErrorMessage(this.state)}

        <div>
          <button onClick={() => goBackTo('toggleSize')}>Go Back and Change the Size</button>
          {this.renderSweetButton()}
        </div>
       
      </form>
    )

  }
}

export default connect(null, {selectMilk, renderSelectSweetness, goBackTo})(SelectMilk);