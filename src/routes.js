import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Detail from './pages/Detail';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/detail/:name" component={Detail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
