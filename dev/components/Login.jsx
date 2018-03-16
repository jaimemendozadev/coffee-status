import React from 'react';
import {connect} from 'react-redux';
import {googleLogin} from '../actions/Authentication.js';

const Login = ({googleLogin}) => (
  <div>
    <h1>Login</h1>
    <p className="loginBtn loginBtn--google"><a className="google-anchor" href='http://localhost:3000/api/auth/google' onClick={googleLogin}>
      Login with Google</a></p>

  </div>
);

export default connect(null, {googleLogin})(Login);