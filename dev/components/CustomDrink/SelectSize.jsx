import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleSubmit, renderInputFields, handleInputChange, renderErrorMessage} from '../utils.jsx';
import {goBackTo, selectSize, renderSelectMilk} from '../../actions/CustomDrink.js';

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
    const {madeSelection} = this.state;
    
    if (madeSelection){
     return <button onClick={(event) => handleSubmit(event, renderSelectMilk)}>Select Type of Milk</button>;
    }
  }

  render(){
    const Sizes = ["Short", "Small", "Medium", "Large", "X-Large"];
    const {goBackTo, selectSize, arrive_at_confirmation} = this.props;

    return (
      <form>
        <h1>Pick a Size for Your Drink</h1>

        <fieldset>

          <legend>Size</legend>
            {this.renderInputFields(Sizes, this.state, this.setState.bind(this), this.handleInputChange, selectSize, "size")}
        
        </fieldset>  
    
        {renderErrorMessage(this.state)}
        
        <div>
          {arrive_at_confirmation ? <button onClick={(event) => handleSubmit(event, goBackTo, 'confirmationPage')}>Go Back to Confirm Saved Changes</button> : null}

          <button onClick={(event) => handleSubmit(event, goBackTo, 'selectType')}>Go Back and Make a Selection</button>
          
          {this.renderMilkButton()}
        </div>
       
      </form>
    )
  }
}

function mapStateToProps({CustomDrink: {arrive_at_confirmation}}){
  return {
    arrive_at_confirmation
  }
}

export default connect(mapStateToProps, {selectSize, renderSelectMilk, goBackTo})(SelectSize);