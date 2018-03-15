import React, {Component} from 'react'
import {renderPage} from '../utils.jsx';
import DisplaySelection from './DisplaySelection.jsx';
import {connect} from 'react-redux';

const CustomDrink = ({current_page}) => (
  <div>
    <h1>Create Your Custom Drink</h1>
    <DisplaySelection />

    {renderPage(current_page)}
  </div>
)

function mapStateToProps({CustomDrink: {current_page}}){
  return {
    current_page
  }
}


export default connect(mapStateToProps, null)(CustomDrink);
