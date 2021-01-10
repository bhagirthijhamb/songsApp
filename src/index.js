import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  // create an instance of Provider
  // provide the Provider component a single prop, store which is the result of calling createStore and passing in the reducers
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, 
  document.querySelector('#root'));