import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {AUTH_SUCCESS} from './actions/Authentication.js';
import {NOT_AUTHENTICATED} from './actions/Authentication.js';
import HomePage from './components/HomePage.jsx';
import LandingPage from './components/LandingPage.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import UpdatePhone from './components/UpdatePhone.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CustomDrink from './components/CustomDrink/index.jsx';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Router/index.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const token = localStorage.getItem('token');

if(token) {
  store.dispatch({type: AUTH_SUCCESS});
} else {
  store.dispatch({type: NOT_AUTHENTICATED});
}



ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <Switch>
      <PrivateRoute path='/homepage' component={HomePage} />
      <PrivateRoute path='/customdrink' component={CustomDrink} />
      <PrivateRoute path='/updateprofile' component={UpdatePhone} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/errorpage' component={ErrorPage} />
      <Route path='/' component={LandingPage} />
    </Switch>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
