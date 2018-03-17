import React from 'react';
import {connect} from 'react-redux';
import {googleLoginSuccess} from '../actions/Authentication.js';

const Login = (props) => (
  <div>
    {console.log("props are ", props)}
    <h1>Login</h1>
    <p className="loginBtn loginBtn--google"><a className="google-anchor" href="http://localhost:3000/api/auth/google">
      Login with Google</a></p>

      

  </div>
);

export default connect(null, null)(Login);