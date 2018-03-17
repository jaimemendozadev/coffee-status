import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    props.isAuthenticated === true ?
      <Component {...props} /> :
      <Redirect to='/login' />  
  )}/>
);

function mapStateToProps({Authentication: {isAuthenticated}}){
  return {
    isAuthenticated
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
*/




