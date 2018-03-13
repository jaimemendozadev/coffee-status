import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBackTo} from '../../actions/CustomDrink.js';
import {selectSize} from '../../actions/CustomDrink.js';
import {renderSelectMilk} from '../../actions/CustomDrink.js';
import {renderInputFields} from '../utils.jsx';
import {handleInputChange} from '../utils.jsx';
import {renderErrorMessage} from '../utils.jsx';

class SelectSize extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Short": false,
      "Small": false,
      "Medium": false,
      "Large": false,
      "X-Large": false,
      "madeSelection": false,
      "errorMessage": ''
    }
    
    this.renderMilkButton = this.renderMilkButton.bind(this);
    this.handleInputChange = handleInputChange.bind(this);
    this.renderInputFields = renderInputFields.bind(this);

  }

  renderMilkButton(){
    const {renderSelectMilk} = this.props;
    
    if (this.state.madeSelection){
     return <button onClick={() => renderSelectMilk()}>Select Type of Milk</button>;
    }
  }

  render(){
    const Sizes = ["Short", "Small", "Medium", "Large", "X-Large"];
    const {goBackTo, selectSize} = this.props;

    return (
      <form>
        <h1>Pick a Size for Your Drink</h1>

        <fieldset>

          <legend>Size</legend>
            {this.renderInputFields(Sizes, this.state, this.setState.bind(this), this.handleInputChange, selectSize, "size")}
        
        </fieldset>  
    
        {renderErrorMessage(this.state)}
        
        <div>
          <button onClick={() => goBackTo('selectType')}>Go Back and Make a Selection</button>
          {this.renderMilkButton()}
        </div>
       
      </form>
    )
  }
}

export default connect(null, {selectSize, renderSelectMilk, goBackTo})(SelectSize);