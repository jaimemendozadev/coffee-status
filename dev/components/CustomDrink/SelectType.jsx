import React, {Component} from 'react';
import {connect} from 'react-redux';
import {renderPage, handleSubmit} from '../utils.jsx';
import {renderSelectSize, goBackTo, selectType} from '../../actions/CustomDrink.js';


class SelectType extends Component {
  constructor(props){
    super(props);
      this.state = {
        "Iced": {
          "Coffee": false,
          "Latte": false,
          "Americano": false,
          "Espresso": false,
          "Cappuccino": false,
          "Flat White": false,
          "Macchiato": false,
          "Mocha": false,
          "Cold Brew": false,
          "Nitro": false
        },

        "Hot": {
          "Coffee": false,
          "Latte": false,
          "Americano": false,
          "Espresso": false,
          "Cappuccino": false,
          "Flat White": false,
          "Macchiato": false,
          "Mocha": false,
          "Frappuchino": false
        },
        "madeSelection": false,
        "errorMessage": ''
      }
      this.renderErrorMessage = this.renderErrorMessage.bind(this);
      this.renderSelectSizeButton = this.renderSelectSizeButton.bind(this);
      this.renderInputFields = this.renderInputFields.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }

  renderErrorMessage(){
    if (this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
    }
  }

  renderSelectSizeButton(){
    const {renderSelectSize} = this.props;
    const {madeSelection} = this.state;
    
    if (madeSelection){
     return <button onClick={(event) => handleSubmit(event, renderSelectSize)}>Select a Size</button>;
    }
  }

  renderInputFields(TypeArray, temperature){
    return TypeArray.map((type, idx) => {
      return (
        <label key={`${type + idx}`}>{type}
          <input
            type="checkbox"
            name={type}
            checked={this.state[temperature][type]}
            onClick={(event) => this.handleInputChange(event, temperature)} />
        </label> 
      )
    });  
  }
    
  

  handleInputChange(event, temp) {
    const {madeSelection} = this.state;
    const {selectType} = this.props;
    let newState;

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get name attr from <input>
    const name = event.target.name;


    //when nothing's been selected
    if (madeSelection == false){
      //make copy of old state
      newState = {...this.state}

      //update state
      newState[temp][name] = value;
      newState.madeSelection = true;
      newState.errorMessage = null;
      this.setState(newState, ()=> selectType(temp, name));
    }


    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[temp][name] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to make a new selection.";
  
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[temp][name] = value;
        newState.madeSelection = false;
        newState.errorMessage = null;
        this.setState(newState, ()=> selectType('', ''));
      }
    }
  }
  
  render() {
    const IcedCoffee = ["Coffee", "Latte", "Americano", "Espresso", "Cappuccino", "Flat White", "Macchiato", "Mocha", "Cold Brew", "Nitro"];
    
    const HotCoffee = ["Coffee", "Latte", "Americano", "Espresso", "Cappuccino", "Flat White", "Macchiato", "Mocha", "Frappuchino"];

    const {goBackTo, arrive_at_confirmation} = this.props;

    return (
      <form>
        <h1>What cup o' Joe would you like?</h1>
        <fieldset>
          <legend>Iced</legend>
            {this.renderInputFields(IcedCoffee, "Iced")}
        </fieldset>  
        
        <fieldset>
          <legend>Hot</legend>
            {this.renderInputFields(HotCoffee, "Hot")}
        </fieldset>

        {this.renderErrorMessage()}
        
        <div>
          {arrive_at_confirmation ? <button onClick={(event) => handleSubmit(event, goBackTo, 'confirmationPage')}>Go Back to Confirm Saved Changes</button> : null}

          <button onClick={(event) => handleSubmit(event, goBackTo, 'selectionPage')}>Go Back and Pick a Different Type</button>
          
          {this.renderSelectSizeButton()}
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


export default connect(mapStateToProps, {selectType, renderSelectSize, goBackTo})(SelectType);