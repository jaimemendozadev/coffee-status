import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBackTo} from '../../actions/CustomDrink.js';
import {selectSweetness} from '../../actions/CustomDrink.js';
import {renderSelectToppings} from '../../actions/CustomDrink.js';
import {renderErrorMessage} from '../utils.jsx';

class SelectSweetness extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Equal": false,
      "Sugar in the Raw": false,
      "Stevia": false,
      "Honey": false,
      "Splenda": false,
      "Sugar": false,
      "Sweet 'n Low": false,
      "No Sweetness": false,
      "Quantity": "0",
      "currentSelection": '',
      "madeSelection": false,
      "errorMessage": ''
    }

    this.handleFinalCheck = this.handleFinalCheck.bind(this);
    this.renderToppingsButton = this.renderToppingsButton.bind(this);
    this.renderInputFields = this.renderInputFields.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleFinalCheck(){
    const {currentSelection, Quantity} = this.state;
    const {renderSelectToppings} = this.props;

    //if the user makes a selection but doesn't specify an amount > 0
    if (currentSelection != 'No Sweetness' && Quantity == 0) {
      
      this.setState({errorMessage: 'Please specify an amount for the selected sweetness lever.'});

    } else {

      renderSelectToppings();
    }
  }

  renderToppingsButton(){
    const {madeSelection} = this.state;
    
    if (madeSelection){
     return <button onClick={() => this.handleFinalCheck()}>Select Drink Toppings</button>;
    }
  }
  

  renderInputFields(SweetArray){
    return SweetArray.map((SweetType, idx) => {
      return (
        <label key={`${SweetType + idx}`}>{SweetType}
          <input
            type="checkbox"
            name={SweetType}
            checked={this.state[SweetType]}
            onClick={(event) => this.handleInputChange(event)} />
        </label> 
      )
    });  
  }

  handleFormChange(event){
    let newState;
    const {selectSweetness} = this.props;
    const {currentSelection} = this.state;

    let formInput = event.target.value;
    formInput = parseInt(formInput, 10);

    

    if(isNaN(formInput)){

      this.setState({
        "errorMessage": 'Please enter a valid number'    
      });

    } else {
      newState = {...this.state};
      newState.Quantity = formInput;
      newState.errorMessage = ''
    
      this.setState(newState, () => selectSweetness(currentSelection, formInput));
    }
  }


  handleInputChange(event) {
    const {madeSelection, Quantity} = this.state;
    const {selectSweetness} = this.props;
    
    let newState;

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get sweetness type from name attr 
    const SweetType = event.target.name;


    //when nothing's been selected
    if (madeSelection == false){
      //make copy of old state
      newState = {...this.state};

      //update state
      newState[SweetType] = value;
      newState.currentSelection = SweetType;
      newState.madeSelection = true;

      newState.errorMessage = null;
      this.setState(newState, () => selectSweetness(SweetType, Quantity));
    }

    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[SweetType] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to select a new sweetner option.";
    
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[SweetType] = value;
        newState.currentSelection = '';
        newState.madeSelection = false;
        newState.errorMessage = null;
        
        //revert sweetness quantity to 0 
        newState.Quantity = "0";

        this.setState(newState, () => selectSweetness('','')); 
      }
    }
  }


  render(){
    const SweetArray = ["Equal", "Sugar in the Raw", "Stevia", "Honey", "Splenda", "Sugar", "Sweet 'n Low", "No Sweetness"];
    const {Quantity} = this.state;
    const {goBackTo} = this.props;

    return (
      <form>
        <h1>Select the Level of Sweetness for Your Drink</h1>
        <fieldset>
          <legend>Sweetness</legend>
            {this.renderInputFields(SweetArray)}
            <label>Quantity
            <input
              value={Quantity}
              type="text"
              name={"Quantity"}
              onChange={this.handleFormChange} />
            </label> 
        </fieldset>  
    
        {renderErrorMessage(this.state)}

        <div>
          <button onClick={() => goBackTo('toggleMilk')}>Go Back and Change the Milk Type</button>
          {this.renderToppingsButton()} 
        </div>
      </form>
    )
  }
}

function mapStateToProps({CustomDrink: { selected_sweetness }}){
  return {
    selected_sweetness
  }
}

export default connect(mapStateToProps, {selectSweetness, renderSelectToppings, goBackTo})(SelectSweetness);