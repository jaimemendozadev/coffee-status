import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(rootReducer)}>
  <App />
</Provider>, document.querySelector('.container'));
