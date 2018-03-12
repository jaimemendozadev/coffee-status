import React, {Component} from 'react';


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
      "Other": '',
      "madeSelection": false,
      "errorMessage": ''
    }
  }



  render(){

    return (
      <h1>SelectMilk</h1>
    )
  }
}

export default SelectMilk;