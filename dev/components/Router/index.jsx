import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import ErrorPage from '../ErrorPage.jsx';

class PrivateRoute extends Component {
  
  render(){
    const {errorMessage} = this.props;
    const token = localStorage.getItem('token');
    const {isAuthenticated} = this.props;
    const {component: Component, ...rest} = this.props;
  
    if(errorMessage) {
      return <ErrorPage />    
    }

    if(isAuthenticated){
      
      return (
        <Route {...rest} render={(props) => <Component {...props}/>} />
      )
    }

    return <Redirect to='/login' />

  }
}



function mapStateToProps({Authentication: {errorMessage, isAuthenticated}}){
  return {
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps, null)(PrivateRoute);


/*
Link: https://tylermcginnis.com/react-router-protected-routes-authentication/

Notes:
1) We pass the component and spread the ...rest (path, location, computedMatch) on PrivateRoute

2) Inside the Route, we:
  - props: history, location, match
  - pass ...rest on the route (computedMatch, location, path)



const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    props.isAuthenticated === true ?
      <Component {...props} /> :
      <Redirect to='/errorpage' />  
  )}/>
);

*/




