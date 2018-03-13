import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBackTo} from '../../actions/CustomDrink.js';
import {selectToppings} from '../../actions/CustomDrink.js';
import {renderConfirmation} from '../../actions/CustomDrink.js';
import {handleSubmit, renderErrorMessage} from '../utils.jsx';

class SelectToppings extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Whipped Cream": false,
      "Cinnamon": false,
      "Caramel Syrup": false,
      "No Toppings": false,
      "Quantity": "0",
      "currentSelection": '',
      "madeSelection": false,
      "errorMessage": ''
    }

    this.handleFinalCheck = this.handleFinalCheck.bind(this);
    this.renderConfirmationButton = this.renderConfirmationButton.bind(this);
    this.renderInputFields = this.renderInputFields.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleFinalCheck(event){
    event.preventDefault();
    const {currentSelection, Quantity} = this.state;
    const {renderConfirmation} = this.props;

    //if the user makes a selection but doesn't specify an amount > 0
    if (currentSelection != 'No Toppings' && Quantity == 0) {
      
      this.setState({errorMessage: 'Please specify an amount for the selected topping.'});

    } else {

      renderConfirmation();
    }
  }

  renderConfirmationButton(){
    const {madeSelection} = this.state;

    if (madeSelection){
     return <button onClick={(event) => this.handleFinalCheck(event) }>Confirm Your Custom Order</button>;
    }
  }
  

  renderInputFields(ToppingsArray){
    return ToppingsArray.map((ToppingType, idx) => {
      return (
        <label key={`${ToppingType + idx}`}>{ToppingType}
          <input
            type="checkbox"
            name={ToppingType}
            checked={this.state[ToppingType]}
            onClick={(event) => this.handleInputChange(event)} />
        </label> 
      )
    });  
  }

  handleFormChange(event){
    let newState;
    const {selectToppings} = this.props;
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
    
      this.setState(newState, () => selectToppings(currentSelection, formInput));
    }
  }


  handleInputChange(event) {
    const {madeSelection, Quantity} = this.state;
    const {selectToppings} = this.props;
    
    let newState;

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get topping type from name attr 
    const ToppingType = event.target.name;


    //when nothing's been selected
    if (madeSelection == false){
      //make copy of old state
      newState = {...this.state};

      //update state
      newState[ToppingType] = value;
      newState.currentSelection = ToppingType;
      newState.madeSelection = true;
      newState.errorMessage = null;
      this.setState(newState, () => selectToppings(ToppingType, Quantity));
    }



    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[ToppingType] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to select a new topping option.";
    
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[ToppingType] = value;
        newState.currentSelection = '';
        newState.madeSelection = false;
        newState.errorMessage = null;
        
        //revert toppings quantity to 0 
        newState.Quantity = "0";

        this.setState(newState, () => selectToppings('','')); 
      }
    }
  }



  render(){
    const ToppingsArray = ["Whipped Cream", "Cinnamon", "Caramel Syrup", "No Toppings"];
    const {Quantity} = this.state;
    const {goBackTo} = this.props;
    return (
      <form>
        <h1>Select the Toppings for Your Drink</h1>
        <fieldset>
          <legend>Toppings</legend>
            {this.renderInputFields(ToppingsArray)}
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
          <button onClick={(event) => handleSubmit(event, goBackTo, 'toggleSweet')}>Go Back and Change the Sweetness Level</button>
          {this.renderConfirmationButton()} 
        </div>
       
      </form>
    )
  }
}

export default connect(null, {selectToppings, renderConfirmation, goBackTo})(SelectToppings);