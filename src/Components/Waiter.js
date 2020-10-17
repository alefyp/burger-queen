import React from 'react';
import '../css/NotFound.css';
import MenuBar from './MenuBar';
import Wepa from './Wepa';
import NewOrder from './NewOrder'

import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";

const Waiter = (props) => {
  let { url } = useRouteMatch();

  return (
    <div className="main-view">
      <MenuBar pathoptions={["Neworder", "Orderstate"]} pathoptionsname={["Nueva Orden", "Estado de pedidos"]} employee={'Alejandra'} />

      <Switch>
        <Route path={`${url}/Neworder`}>
          <NewOrder />
        </Route>
        <Route path={`${url}/OrderState`}>
          <h1>aquí van las ordenes ya enviadas</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Waiter;