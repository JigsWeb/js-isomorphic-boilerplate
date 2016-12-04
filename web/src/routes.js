import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, Home, Signin } from './containers';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="home" component={Home}/>
    <Route path="signin" component={Signin}/>
  </Route>
);

export default routes;