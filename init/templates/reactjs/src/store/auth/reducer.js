/**
 * -------------------------------------------------------------------------------------------
 * REDUCERS
 * -------------------------------------------------------------------------------------------
 * reducers hold the store's state (the initialState object defines it)
 * reducers also handle plain object actions and modify their state (immutably) accordingly
 * this is the only way to change the store's state
 * the other exports in this file are selectors, which is business logic that digests parts of the store's state
 * for easier consumption by views
 */


import * as Types from './types';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  user: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null
};

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case Types.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        'isAuthenticating': true,
        'statusText': null
      });
    case Types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        'isAuthenticating': false,
        'isAuthenticated': true,
        'token': action.payload.token,
        'user': jwtDecode(action.payload.token).user,
        'statusText': 'You have been successfully logged in.'
      });
    case Types.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        'isAuthenticating': false,
        'isAuthenticated': false,
        'token': null,
        'user': null,
        'statusText': `Authentication Error: ${action.payload.status} ${action.payload.statusText}`
      });
    case Types.LOGOUT_USER:
      return Object.assign({}, state, {
        'isAuthenticated': false,
        'token': null,
        'user': null,
        'statusText': 'You have been successfully logged out.'
      });
    default:
      return state;
  }

}
