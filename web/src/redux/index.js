import { combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux'

import { auth } from './modules';

const reducers = combineReducers({
  auth,
  routing
});

export default reducers;