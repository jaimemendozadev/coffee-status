import React, {Component} from 'react'
import {renderPage} from '../utils.jsx';

import {connect} from 'react-redux';

class CustomDrink extends Component {
  constructor (props) {
    super(props)
    this.renderPage = renderPage;
  }

  render () {
    const { current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings } = this.props;
    return (
      <div>
        <h1>Create a Custom Drink</h1>
        <div>
          <h1>You've currently selected:</h1>
          <ul>
            <li>Drink: {drink}</li>
            <li>Type: {!type ? '' : type.join(" ")}</li>
            <li>Size: {selected_size}</li>
            <li>Milk Type: {selected_milk}</li>
            <li>Sweetness Type &amp; Quantity: {!selected_sweetness ? '' : selected_sweetness.join(" ")}</li>
            <li>Optional Topings: {!selected_topings ? '' : selected_topings.join(" ")}</li>
          </ul>
        </div>
        
        {this.renderPage(current_page)}
      </div>

    )
  }
}

function mapStateToProps({ CustomDrink: {current_page, drink, type, selected_size, selected_milk, selected_sweetness, selected_topings } }){
  return {
    current_page,
    drink,
    type,
    selected_size,
    selected_milk,
    selected_sweetness,
    selected_topings
  }
}

export default connect(mapStateToProps, null)(CustomDrink);
