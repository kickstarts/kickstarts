// --------------------------------------------------------------------------------
// Modules
// --------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// Store
import * as reducers from './store';
import { authAction } from './store/auth/actions';

// Components
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Me from './components/Me';

// Styles
import './index.css';


// --------------------------------------------------------------------------------
// Bootstrap App
// --------------------------------------------------------------------------------

const history = createHistory();
const middleware = routerMiddleware(history);

const Reducers    = combineReducers({ reducers, routing: routerReducer });
const Middlewares = applyMiddleware(thunk);
const store       = createStore(Reducers, Middlewares);

const isAuthorized = (nextState, replace, callback) => {
  store.dispatch(authAction(nextState, replace, callback));
};

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/me" component={Me} onEnter={isAuthorized}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
