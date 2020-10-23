import React from 'react';
import styles from '../../css/Chef.module.css';
import MenuBar from '../MenuBar';
import ActiveOrdersChef from '../ActiveOrdersChef';


import {
  useRouteMatch,
  Switch,
  Route
} from "react-router-dom";

const Chef = () => {

  let { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <MenuBar pathoptions={["activeorders", "orderslist"]} pathoptionsname={["Ordenes activas", "Estado General"]} employee={'Chef/Cocina'} />
      <Switch>
        <Route path={`${url}/activeorders`}>
          <ActiveOrdersChef />
        </Route>
        <Route path={`${url}/orderslist`}>
          <h1>Aquí va el estado general de las cosas</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default Chef;