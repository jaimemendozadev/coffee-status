import React, {Component} from 'react'
import SelectionPage from './SelectionPage.jsx';
import {connect} from 'react-redux';

class CustomDrink extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectionPage: true, // coffee or tea
      toggleSize: false, // size, caffeine, ice/temp
      toggleMilk: false, // milk
      toggleSweet: false, // sweet
      toggleToppings: false, // toppings
      confirmationPage: false
    }
    this.renderPage = this.renderPage.bind(this);

  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps", nextProps)
  }

  renderPage(){
    const {selectionPage, toggleSize, toggleMilk, toggleSweet, toggleToppings, confirmationPage} = this.state;

    if(selectionPage){
      return <SelectionPage />
    }

    if(toggleSize){
      
    }

    if(toggleMilk){

    }

    if(toggleSweet){

    }

    if(toggleToppings){

    }

    if(confirmationPage){

    }
  }

  render () {
    const { drink, type, selected_size, selected_milk, other_options } = this.props;
    return (
      <div>
        <h1>Create a Custom Drink</h1>
        <div>
          <h1>You've currently selected:</h1>
          <ul>
            <li>Drink: {drink}</li>
            <li>Type: {type}</li>
            <li>Size: {selected_size}</li>
            <li>Milk Type: {selected_milk}</li>
            <li>Options: {!other_options ? '' : other_options.join(" ")}</li>
          </ul>
        </div>
        
        {this.renderPage()}
      </div>

    )
  }
}






function mapStateToProps({ CustomDrink: {drink, type, selected_size,selected_milk, other_options } }){
  return {
    drink,
    type,
    selected_size,
    selected_milk,
    other_options
  }
}

export default connect(mapStateToProps, null)(CustomDrink);
