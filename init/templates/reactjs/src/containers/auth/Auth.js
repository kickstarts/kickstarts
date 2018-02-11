// containers are "smart" react components that are aware of redux
// they are connected to the redux store and listen on part of the app state
// they use mapStateToProps to specify which parts and use selectors to read them
// avoid having view logic & local component state in them, use "dumb" components instead

import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Auth.css';

import * as authActions from '../store/auth/actions';
import Auth from '../components/Auth.js';

function mapStateToProps(state) {
  return {
    Auth: state.Auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => dispatch(login(username, password)),
    signup: (username, email, password) => dispatch(signup(username, email, password)),
    logout: () => dispatch(logout()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
