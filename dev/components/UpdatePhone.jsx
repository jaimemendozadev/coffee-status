import React, {Component} from 'react';
import {validatePhoneNumber} from './utils.jsx';
import axios from 'axios';
const APP_API = process.env.APP_API;

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
      
      const token = localStorage.getItem('token');
      const payload = {token, phone_number: phone_number.phone};
      const {push} = this.props.history;

      console.log("this props inside UpdatePhone ", this.props);

      axios.patch(`${APP_API}/user`, payload)
        .then(serverResult => {
          console.log('serverResult from user patch ', serverResult);
          push('/homepage');

        })
        .catch(error => {
          console.log('error from user patch ', error);
        });

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
