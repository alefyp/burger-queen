import React from 'react';
import '../css/NotFound.css';
import MenuBar from './MenuBar';
import ActiveOrders from './ActiveOrders';

import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";


// import {
//   BrowserRouter as Router,
//   useRouteMatch
// } from "react-router-dom";

const Chef = () => {

  let { url } = useRouteMatch();

  return (
    <div className="main-view">
      <MenuBar pathoptions={["activeorders", "orderslist"]} pathoptionsname={["Ordenes activas", "Estado General"]} employee={'Alejandra'} />

      <Switch>
        <Route path={`${url}/activeorders`}>
          <ActiveOrders />
        </Route>
        <Route path={`${url}/orderlist`}>
          <h1>Aquí irían todas las ordenes</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Chef;