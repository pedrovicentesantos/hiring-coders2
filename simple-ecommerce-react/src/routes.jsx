import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Cart from './pages/Cart';
import Home from './pages/Home';
import Shopping from './pages/Shopping';
import User from './pages/User';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/shopping" exact component={Shopping} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/user" exact component={User} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
