import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSize} from '../../actions/selectSize.js';
import {renderSelectMilk} from '../../actions/renderSelectMilk.js';

class SelectSize extends Component {
  constructor(props){
    super(props);
    this.state = {
      "Short": false,
      "Small": false,
      "Medium": false,
      "Large": false,
      "X-Large": false,
      "madeSelection": false,
      "errorMessage": ''
    }
    
    this.renderErrorMessage = this.renderErrorMessage.bind(this);
    this.renderMilkButton = this.renderMilkButton.bind(this);
    this.renderInputFields = this.renderInputFields.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  renderErrorMessage(){
    if (this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
    }
  }

  

  renderMilkButton(){
    const {renderSelectMilk} = this.props;
    
    if (this.state.madeSelection){
     return <button onClick={() => renderSelectMilk()}>Select Type of Milk</button>;
    }
  }
  

  renderInputFields(SizesArray){
    return SizesArray.map((size, idx) => {
      return (
        <label key={`${size + idx}`}>{size}
          <input
            type="checkbox"
            name={size}
            checked={this.state[size]}
            onClick={(event) => this.handleInputChange(event)} />
        </label> 
      )
    });  
  }


  handleInputChange(event) {
    const {madeSelection} = this.state;
    const {selectSize} = this.props;
    
    let newState;

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get size from name attr 
    const size = event.target.name;


    //when nothing's been selected
    if (madeSelection == false){
      //make copy of old state
      newState = {...this.state}

      //update state
      newState[size] = value;
      newState.madeSelection = true;
      newState.errorMessage = null;
      this.setState(newState, () => selectSize(size));
    }


    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[size] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to select a new size.";
    
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[size] = value;
        newState.madeSelection = false;
        newState.errorMessage = null;
        this.setState(newState, () => selectSize('')); 
      }
    }
  }

  render(){
    const Sizes = ["Short", "Small", "Medium", "Large", "X-Large"];

    return (
      <form>
        <h1>Pick a Size for Your Drink</h1>
        <fieldset>
          <legend>Size</legend>
            {this.renderInputFields(Sizes)}
        </fieldset>  
    
        {this.renderErrorMessage()}
        {this.renderMilkButton()}
       
      </form>
    )
  }
}

export default connect(null, {selectSize, renderSelectMilk})(SelectSize);