import React from 'react';
import styles from '../../css/Waiter.module.css';
import MenuBar from '../MenuBar';
import NewOrder from '../NewOrder';
import OrderState from '../OrderState';

import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";

const Waiter = (props) => {
  let { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <MenuBar pathoptions={["Neworder", "Orderstate"]} pathoptionsname={["Nueva Orden", "Estado de pedidos"]} employee={'Mesero/Mesas'} />

      <Switch>
        <Route path={`${url}/Neworder`}>
          <NewOrder />
        </Route>
        <Route path={`${url}/OrderState`}>
          <OrderState />
        </Route>
      </Switch>
    </div>
  );
}

export default Waiter;