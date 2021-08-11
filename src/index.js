import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import airlineReducer from './reducers/airlineReducer'
import airportReducer from './reducers/airportReducer'
import dataReducer from './reducers/dataReducer'
import startPositionReducer from './reducers/startPositionReducer'

const allReducers = {
  filteredAirlines: airlineReducer,
  filteredAirports: airportReducer,
  filteredData: dataReducer,
  start: startPositionReducer,
}

const store = createStore(combineReducers(allReducers))

ReactDOM.render(
  <Provider store={store}>    
    <App />
  </Provider>,  
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
