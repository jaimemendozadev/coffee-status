import React, {Component} from 'react'
import SelectionPage from './SelectionPage.jsx';
import SelectType from './SelectType.jsx';

import {connect} from 'react-redux';

class CustomDrink extends Component {
  constructor (props) {
    super(props)
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(currentPage){

    if(currentPage == 'selectionPage'){
      return <SelectionPage />
    }

    if(currentPage == 'selectType'){
      return <SelectType />
    }
    
    
    /*

    if(currentPage == 'toggleSize'){
          
    }

    if(currentPage == 'toggleMilk'){

    }

    if(currentPage == 'toggleSweet'){

    }

    if(currentPage == 'toggleToppings'){

    }

    if(currentPage == 'confirmationPage'){

    }
    */
  }

  render () {
    const { current_page, drink, type, selected_size, selected_milk, other_options } = this.props;
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
        
        {this.renderPage(current_page)}
      </div>

    )
  }
}

function mapStateToProps({ CustomDrink: {current_page, drink, type, selected_size,selected_milk, other_options } }){
  return {
    current_page,
    drink,
    type,
    selected_size,
    selected_milk,
    other_options
  }
}

export default connect(mapStateToProps, null)(CustomDrink);
