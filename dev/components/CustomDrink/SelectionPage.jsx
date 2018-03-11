import React from 'react';
import {selectDrink} from '../../actions/selectDrink.js';
import {connect} from 'react-redux';



const style = {
  
  buttonContainer: {
    border: '1px solid red',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: '10px',
    width: '100px',
    height: '50px'
  }
}

const SelectionPage = ({selectDrink}) => (
  <div className="SelectionPage">
    <h1>What Drink Would You Like?</h1>
    <div style={style.buttonContainer}>
      <button style={style.button} onClick={() => selectDrink("Coffee")}>Coffee</button>
      <button style={style.button} onClick={() => selectDrink("Tea")}>Tea</button>
    </div>
  </div>
)

export default connect(null, {selectDrink})(SelectionPage);