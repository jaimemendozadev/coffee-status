import React, {Component} from 'react';
import CustomDrink from './CustomDrink/index.jsx';
import styles from '../main.scss';

class HomePage extends Component {

  render() {
    console.log("this.props inside App ", this.props)
    return (
      <div>
        <div>
          <h1>Welcome to CoffeeStatus: Create a Custom Drink</h1>
          
        </div>
      </div>
    )
  }
}

export default HomePage;