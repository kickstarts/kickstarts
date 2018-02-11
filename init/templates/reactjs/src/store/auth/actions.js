/**
 * -------------------------------------------------------------------------------------------
 * ACTIONS
 * -------------------------------------------------------------------------------------------
 * Overview:
 * Actions are where most of the business logic takes place
 * they are dispatched by views or by other actions.
 *
 * Types:
 * async thunks - when doing asynchronous business logic like accessing a service
 * sync thunks  - when you have substantial business logic but it's not async
 * plain object - when you just send a plain action to the reducer
 */

import * as Types from './types';
import jwtDecode from 'jwt-decode';
import { push } from 'react-router-redux';
import { checkHttpStatus, parseJSON } from '../../utils';

const API_URI = 'http://localhost:3000/';

export function loginUserSuccess(token) {
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', token);
    return {
      type: Types.LOGIN_USER_SUCCESS,
      payload: {
        token
      }
    }
  }
}

export function loginUserFailure(error) {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return {
    type: Types.LOGIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function loginUserRequest() {
  return {
    type: Types.LOGIN_USER_REQUEST
  }
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: Types.LOGOUT_USER
  }
}

export function logoutAndRedirect() {
  return (dispatch) => {  // , state
    dispatch(logout());
    dispatch(push('/login'));
  }
}

export function loginUser(email, password, redirect = '/') {
  return function (dispatch) {
    dispatch(loginUserRequest());
    return fetch(`${API_URI}/auth/login/`, {
        method: 'post',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        try {
          let decoded = jwtDecode(response.token);
          dispatch(loginUserSuccess(decoded.user, decoded));
          dispatch(push(redirect));
        } catch (e) {
          dispatch(loginUserFailure({
            response: {
              status: 403,
              statusText: 'Invalid token'
            }
          }));
        }
      })
      .catch(error => {
        dispatch(loginUserFailure(error));
      })
  }
}

export function receiveProtectedData(data) {
  return {
    type: Types.RECEIVE_PROTECTED_DATA,
    payload: {
      data: data
    }
  }
}

export function fetchProtectedDataRequest() {
  return {
    type: Types.FETCH_PROTECTED_DATA_REQUEST
  }
}

export function fetchProtectedData(token) {
  return (dispatch) => { // , state
    dispatch(fetchProtectedDataRequest());
    return fetch(API_URI, {
        credentials: 'include',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(checkHttpStatus)
      .then(parseJSON)
      .then(response => {
        dispatch(receiveProtectedData(response.data));
      })
      .catch(error => {
        if (error.response.status === 401) {
          dispatch(loginUserFailure(error));
          dispatch(push('/login'));
        }
      })
  }
}
