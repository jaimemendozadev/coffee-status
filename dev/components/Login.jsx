import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {authPromise, authInProgress, authSuccess, authCompleted, authFailure} from '../actions/Authentication.js';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      tokenSet: false
    }
    this.homepageRedirect = this.homepageRedirect.bind(this);
  }

  homepageRedirect(){

    this.props.history.push('/homepage')

  }

  componentWillMount(){
    const {authSuccess, authCompleted, authFailure, isAuthenticated} = this.props;
    const {search} = this.props.location;

    const{setToken} = this.state;
    const {push} = this.props.history;

    //on CWM, if we get the token, save in localStorage and fire action creator
    if(search.length > 0) {
      const token = search.includes('?token=') ? search.slice(8) : {error: true};

      if(token.error == true) {
        authFailure()
      } 
      
      authPromise.then(result => {
        return authSuccess(token);
      })
      .then(authSuccessResult => {
        console.log("authSuccessResult ", authSuccessResult);
        return authCompleted();
      })
      .then(authCompletedResult => {
        this.setState({
          tokenSet: true
        });
      })
      .catch(error => {
        console.log("Error inside authPromise ", error);
      })
    }

   
    
  }
  


  render() {
    const {currentlyAuthenticating, errorMessage, isAuthenticated, authInProgress} = this.props;

    if (currentlyAuthenticating == true){
      return <h1>Authentication in Progress...</h1>;
    }

    if(isAuthenticated){
      this.homepageRedirect();
    }

    return (
      <div>
        <h1>Login</h1>
        <p className="loginBtn loginBtn--google"><a onClick={authInProgress} className="google-anchor" href="http://localhost:3000/api/auth/google">Login with Google</a></p>
        <p>{errorMessage ? errorMessage : ''}</p>
      </div>
    )

  }
}



function mapStateToProps({Authentication: {currentlyAuthenticating, errorMessage, isAuthenticated}}){
  return {
    currentlyAuthenticating,
    isAuthenticated,
    errorMessage
  }
}
  


export default connect(mapStateToProps, {authInProgress, authSuccess, authCompleted, authFailure})(Login);