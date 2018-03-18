import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const ErrorPage = ({isAuthenticated}) => (
  <h1>Whoops! There was an error with the app, try again later. <pre>¯\_(ツ)_/¯</pre></h1>
);


function mapStateToProps({Authentication: {isAuthenticated}}){
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, null)(ErrorPage);