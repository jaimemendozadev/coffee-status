import React, {Component} from 'react';
import {goBackTo} from '../../actions/CustomDrink.js';
import {connect} from 'react-redux';
const API = `http://localhost:3000/api/customdrink`;

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

      const payload = {
        drink, 
        type,
        selected_size, 
        selected_milk, 
        selected_sweetness,
        selected_topings
      }

      let API_OPTIONS = {
        method: 'POST',
        headers : new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(payload)
      };
  
      fetch(API, API_OPTIONS).then(result => {
        console.log("the result from the server ", result);
      })
      .catch(error => {
        console.log("got an error from server ", error)  
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
          <li onClick={() => goBackTo('toggleToppings')}><a href="#">Pick Different Kind of Topings</a></li>
        </ul>
        <form onSubmit={this.placeOrder(CustomDrink)}>
          <button>Place Your Custom Order</button>
        </form>
      </div>
    )
    
  }  
    

  
}

//{ CustomDrink: {current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings } }

function mapStateToProps({CustomDrink}){
  return { 
    CustomDrink
  }
}

export default connect(mapStateToProps, {goBackTo})(ConfirmationPage);


//'selectionPage', 'selectType', 'toggleSize', 'toggleMilk', 'toggleSweet', 'toggleToppings', 'confirmationPage'