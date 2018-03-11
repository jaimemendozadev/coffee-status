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
        }
      }
      this.renderInputFields = this.renderInputFields.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }

  renderInputFields(TypeArray, temperature){
    return TypeArray.map((type, idx) => {
      return (
        <label key={`${type + idx}`}>{type}
          <input
            type="checkbox"
            name={type}
            checked={this.state[temperature][TypeArray]}
            onClick={(event) => this.handleInputChange(event, temperature)} />
        </label> 
      )
    });  
  }
    
  

  handleInputChange(event, temperature) {

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get name attr from <input>
    const name = event.target.name;

    //make copy of old state
    const newState = {...this.state};

    //update state
    newState[temperature][name] = value

    this.setState(newState);
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
      </form>
    )
  }
}
  


export default connect(null, null)(SelectionType);