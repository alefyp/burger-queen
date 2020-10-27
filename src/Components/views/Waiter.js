import React from 'react';
import styles from '../../css/Waiter.module.css';
import MenuBar from '../MenuBar';
import NewOrder from '../NewOrder';
import ActiveOrdersWaiter from '../ActiveOrdersWaiter';

import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";


const Waiter = (props) => {
  let { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <MenuBar pathoptions={["Neworder", "ActiveOrders"]} pathoptionsname={["Nueva Orden", "Ordenes activas"]} employee={'Mesero'} />

      <Switch>
        <Route path={`${url}/Neworder`}>
          <NewOrder />
        </Route>
        <Route path={`${url}/ActiveOrders`}>
          <ActiveOrdersWaiter />
        </Route>
      </Switch>
    </div>
  );
}

export default Waiter;