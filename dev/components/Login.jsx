import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authSuccess, authFailure} from '../actions/Authentication.js';

class Login extends Component {

  componentWillMount(){
    const {authSuccess, authFailure} = this.props;
    const {search} = this.props.location;
    const {push} = this.props.history;


    if(search.length > 0) {
      const token = search.includes('?token=') ? search.slice(8) : {error: true};
      token.error == true ? authFailure() : authSuccess(token, push);
    }
  }

  render() {
    const {errorMessage} = this.props;
    return (
      <div>
        <h1>Login</h1>
        <p className="loginBtn loginBtn--google"><a className="google-anchor" href="http://localhost:3000/api/auth/google">Login with Google</a></p>
        <p>{errorMessage ? errorMessage : ''}</p>
      </div>
    )

  }
}



function mapStateToProps({errorMessage}){
  return {
    errorMessage
  }
}
  


export default connect(mapStateToProps, {authSuccess, authFailure})(Login);