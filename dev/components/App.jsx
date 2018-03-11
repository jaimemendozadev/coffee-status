import React, {Component} from 'react';
import CustomDrink from './CustomDrink/index.jsx';
import styles from '../main.scss';
class App extends Component {

  render() {
    return (
      <div>
        <h1>CoffeeStatus</h1>
        <CustomDrink />
      </div>
    )
  }
}

export default App;