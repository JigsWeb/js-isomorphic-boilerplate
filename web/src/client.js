import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './redux';
import routes from './routes';

const store = createStore(
  reducers,
  applyMiddleware(
    routerMiddleware(browserHistory)
  )
);

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);