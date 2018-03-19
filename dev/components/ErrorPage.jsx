import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const ErrorPage = ({isAuthenticated}) => (
  <div>
  <h1>Whoops! There was an error with the app, try again later. <pre>¯\_(ツ)_/¯</pre></h1>
  <Link to='/homepage' />
  </div>
);


function mapStateToProps({Authentication: {isAuthenticated}}){
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, null)(ErrorPage);