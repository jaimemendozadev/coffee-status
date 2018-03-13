import React, {Component} from 'react';
import {goBackTo} from '../../actions/CustomDrink.js';
import {connect} from 'react-redux';


text => event => {
  event.preventDefault()
  console.log(text)
}


class ConfirmationPage extends Component {
  
  placeOrder(order) {

    return (event) => {
      event.preventDefault();
      console.log("args inside placeOrder ", order)

    }
  
  
  
  }

  render() {
    const {CustomDrink} = this.props;
    console.log("CustomDrink props ", CustomDrink)
    return (
      <div>
        
        <h1>Click on any of the links to change your selection:</h1>
        <ul>
          <li onClick={() => goBackTo('selectionPage')}><a href="#">Choose a Different   Drink</a></li>
          <li onClick={() => goBackTo('selectType')}><a href="#">Choose a Different   Drink Type</a></li>
          <li onClick={() => goBackTo('toggleSize')}><a href="#">Pick a New Size</a></li>
          <li onClick={() => goBackTo('toggleMilk')}><a href="#">Choose a Different Milk Type</a></li>
          <li onClick={() => goBackTo('toggleSweet')}><a href="#">Adjust the Sweetness   Type &amp; Quantity</a></li>
          <li onClick={() => goBackTo('toggleToppings')}><a href="#">Pick Different Kind of Topings</a></li>
        </ul>
        <form onSubmit={this.placeOrder(CustomDrink)}>
          <button>Place Your Custom Order</button>
        </form>
      </div>
    )
    
  }  
    

  
}


function mapStateToProps({CustomDrink}){
  return { 
    CustomDrink
  }
}

export default connect(mapStateToProps, {goBackTo})(ConfirmationPage);