import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import SelectRol from './views/SelectRol';
import NotFound from './views/NotFound';
import Waiter from './views/Waiter';
import Chef from './views/Chef';

const Routing = () => {
  //Aquí va mi código de autenticación
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rol">
          <SelectRol />
        </Route>
        <Route path="/rol/waiter">
          <Waiter />
        </Route>
        <Route path="/rol/chef">
          <Chef />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routing;

