import React from 'react';
import {connect} from 'react-redux';
import {googleLoginSuccess} from '../actions/Authentication.js';

const Login = ({googleLogin}) => (
  <div>
    <h1>Login</h1>
    <p className="loginBtn loginBtn--google"><a className="google-anchor" onClick={googleLoginSuccess}>
      Login with Google</a></p>

      

  </div>
);

export default connect(null, {googleLoginSuccess})(Login);