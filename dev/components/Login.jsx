import React from 'react';
import {connect} from 'react-redux';
import {googleLogin} from '../actions/Authentication.js';

const Login = ({googleLogin}) => (
  <div>
    <h1>Login</h1>
    <button onClick={googleLogin} class="loginBtn loginBtn--google">
      Login with Google
    </button>
    
  </div>
);

export default connect(null, {googleLogin})(Login);