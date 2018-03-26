import React, {Component} from 'react';
import {validatePhoneNumber} from './utils.jsx';

class UpdatePhone extends Component {
  constructor(props){
    super(props);
    this.state = {
      phone_number: 'Enter a Phone Number',
      error: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let phone_number = event.target.value;
 
    this.setState({
      phone_number,
      error: ''
    });
  }

  handleSubmit(event){
    event.preventDefault();
    let phone_number = validatePhoneNumber(this.state.phone_number);
    
    if(!phone_number.phone){
      this.setState({
        error: 'You must submit a valid phone number.'
      });
    } else {
      console.log("the phone number to submit is ", phone_number)
    }
  }

  render(){
    const {error} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Update Phone Number</label>

        <input onChange={this.handleChange} type="text" value={this.state.phone_number} />
        <button type="submit">Submit</button>
        <h2>{error ? error : ''}</h2>
      </form>
    )
  }
  
}


export default UpdatePhone;
