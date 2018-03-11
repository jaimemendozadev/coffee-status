import React, {Component} from 'react';
import {connect} from 'react-redux';

class SelectionType extends Component {
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
      this.renderInputFields = this.renderInputFields.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }

  renderErrorMessage(){
    if (this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
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
            {console.log(`${temperature}: ${type} ${this.state[temperature][type]}`)}
        </label> 
      )
    });  
  }
    
  

  handleInputChange(event, temp) {
    const {madeSelection} = this.state;
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
      this.setState(newState);
    }


    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[temp][name] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to make a new selection.";
        newState[temp][name] = false;
      
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[temp][name] = value;
        newState.madeSelection = false;
        newState.errorMessage = null;
        this.setState(newState);
      }
    }
  }
  
  render() {
    const IcedCoffee = ["Coffee", "Latte", "Americano", "Espresso", "Cappuccino", "Flat White", "Macchiato", "Mocha", "Cold Brew", "Nitro"];
    
    const HotCoffee = ["Coffee", "Latte", "Americano", "Espresso", "Cappuccino", "Flat White", "Macchiato", "Mocha", "Frappuchino"];

    return (
      <form>
        {console.log("this.state ", this.state)}
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

      </form>
    )
  }
}
  


export default connect(null, null)(SelectionType);