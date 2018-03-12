import React, {Component} from 'react';
import {connect} from 'react-redux';


class SelectSweetness extends Component {
  constructor(props){
    super(props);
    this.state = {
      "some_state": false,

    }

    // this.renderErrorMessage = this.renderErrorMessage.bind(this);
    // this.renderSweetButton = this.renderSweetButton.bind(this);
    // this.renderInputFields = this.renderInputFields.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);

  }

  /*

  renderErrorMessage(){
    if (this.state.errorMessage){
      return <div>{this.state.errorMessage}</div>
    }
  }

  

  renderSweetButton(){
    const {renderSelectSweetness} = this.props;
    
    if (this.state.madeSelection){
     return <button onClick={() => renderSelectSweetness()}>Select Level of Sweetness</button>;
    }
  }
  

  renderInputFields(MilkArray){
    return MilkArray.map((MilkType, idx) => {
      return (
        <label key={`${MilkType + idx}`}>{MilkType}
          <input
            type="checkbox"
            name={MilkType}
            checked={this.state[MilkType]}
            onClick={(event) => this.handleInputChange(event)} />
        </label> 
      )
    });  
  }


  handleInputChange(event) {
    const {madeSelection} = this.state;
    const {selectMilk} = this.props;
    
    let newState;

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get milk type from name attr 
    const MilkType = event.target.name;


    //when nothing's been selected
    if (madeSelection == false){
      //make copy of old state
      newState = {...this.state}

      //update state
      newState[MilkType] = value;
      newState.madeSelection = true;
      newState.errorMessage = null;
      this.setState(newState, () => selectMilk(MilkType));
    }

    //Note: might want to give customers option of choosing 
    //more than one type of milk

    if (madeSelection) {

      //if you try to make more than one selection
      if (this.state[MilkType] == false) {

        //make copy of old state
        newState = {...this.state};

        //update state
        newState.errorMessage = "Unclick the last selection to select a new milk option.";
    
        this.setState(newState);

      } else {
        //make copy of old state
        newState = {...this.state}

        //update state
        newState[MilkType] = value;
        newState.madeSelection = false;
        newState.errorMessage = null;
        this.setState(newState, () => selectMilk('')); 
      }
    }
  }

  */

  render(){
    return (
      <form>
        <h1>Select the Level of Sweetness for Your Drink</h1>
        <fieldset>
          <legend>Size</legend>
            {/* {this.renderInputFields(MilkTypes)} */}
        </fieldset>  
    
        {/* {this.renderErrorMessage()}
        {this.renderSweetButton()} */}
       
      </form>
    )
  }
}

export default connect(null, null)(SelectSweetness);