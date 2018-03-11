import React, {Component} from 'react';
import {connect} from 'react-redux';


class SelectionType extends Component {
  constructor(props){
    super(props);
      this.state = {
        "Iced": {
          "Latte": false  
        },

        "Hot": {
    
        }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
      
  }
    
  

  handleInputChange(event, temperature) {

    //value is boolean that checks if input is clicked
    const value = event.target.checked;

    //get name attr from <input>
    const name = event.target.name;

    //make copy of old state
    const newState = {...this.state};

    //update state
    newState[temperature][name] = value

    this.setState(newState);
  }
  
  render() {
    console.log("selectType State ", this.state)
    return (
      <div>
        <h1>What cup o' Joe would you like?</h1>
        <form>
          <h1>Iced</h1>

          <label>Latte
          <input
            temperature="Iced"
            type="checkbox"
            name="Latte"
            checked={this.state.icedLatte}
            onClick={(event) => this.handleInputChange(event, "Iced")} />
            </label> 
            
            
            

        </form>
      </div>
    )
  }
}
  


export default connect(null, null)(SelectionType);