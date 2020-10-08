import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import SelectRol from './SelectRol';
import NotFound from './NotFound';
import Waiter from './Waiter';
import Chef from './Chef';



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

