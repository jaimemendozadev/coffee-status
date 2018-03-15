import React, {Component} from 'react';
import {Route} from 'react-router-dom';
/*
export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    ifAuthenticated === true ?
      <Component {...props} /> :
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }} />  
  )}/>
)
*/

/*
Link: https://tylermcginnis.com/react-router-protected-routes-authentication/

Notes:
1) We pass the component and spread the ...rest (path, location, computedMatch) on PrivateRoute

2) Inside the Route, we:
  - props: history, location, match
  - pass ...rest on the route (computedMatch, location, path)
*/




