import React, {Component} from 'react';
import {goBackTo} from '../../actions/CustomDrink.js';
import {connect} from 'react-redux';
import axios from 'axios';
const APP_API = `${process.env.APP_API}/customdrink`;

class ConfirmationPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      serverMessage: ''
    }
  }
  
  placeOrder(CustomDrink) {
    return (event) => {
      event.preventDefault();

      const {current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings } = CustomDrink;
      let token = localStorage.getItem('token');
      /*
      const payload = {
        drink, 
        type,
        selected_size, 
        selected_milk, 
        selected_sweetness,
        selected_topings, 
        token
      }
      */

      const payload = {
        token,
        customDrink: {
          drink, 
          type,
          selected_size, 
          selected_milk, 
          selected_sweetness,
          selected_topings,
        }
      }
  
      axios.post(APP_API, payload)
        .then(serverResults => {
          console.log("serverResults from placeOrder are ", serverResults)
        })
        .catch(error => {
          console.log("the error inside placeOrder from the server ", error);
        });
    }
  }

  render() {
    const {CustomDrink, goBackTo} = this.props;
    
    return (
      <div>
        
        <h1>Click on any of the links to change your selection:</h1>
        <ul>
          <li onClick={() => goBackTo('selectionPage')}><a href="#">Choose a Different   Drink</a></li>
          <li onClick={() => goBackTo('selectType')}><a href="#">Choose a Different   Drink Type</a></li>
          <li onClick={() => goBackTo('toggleSize')}><a href="#">Pick a New Size</a></li>
          <li onClick={() => goBackTo('toggleMilk')}><a href="#">Choose a Different Milk Type</a></li>
          <li onClick={() => goBackTo('toggleSweet')}><a href="#">Adjust the Sweetness   Type &amp; Quantity</a></li>
          <li onClick={() => goBackTo('toggleToppings')}><a href="#">Pick Different Kind of Toppings</a></li>
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