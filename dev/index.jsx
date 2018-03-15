import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Login from './components/Login.jsx';
import CustomDrink from './components/CustomDrink/index.jsx';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import {PrivateRoute} from './components/Router/index.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
  <BrowserRouter>
    <Switch>
      <Route path='/customdrink' component={CustomDrink} />
      <Route path='/login' component={Login} />
      <Route path='/' component={App} />
      {/* <PrivateRoute path='/' component={App} /> */}
    </Switch>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
