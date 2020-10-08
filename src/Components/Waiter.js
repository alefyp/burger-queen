import React from 'react';
import '../css/NotFound.css';
import MenuBar from './MenuBar';
import Wepa from './Wepa';
import NewOrder from './NewOrder'

import {
  BrowserRouter as Router,
  useRouteMatch,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Waiter = () => {
  let { url } = useRouteMatch();

  return (
    <div className="main-view">
      <MenuBar pathoptions={["Neworder", "Orderstate", "Wepa"]} employee={'Alejandra'} />

      <Switch>
        <Route path={`${url}/Neworder`}>
          <NewOrder />
        </Route>
        <Route path={`${url}/OrderState`}>
          <h1>aquí van las ordenes ya enviadas</h1>
        </Route>
        <Route path={`${url}/Wepa`}>
          <Wepa />
        </Route>
      </Switch>
    </div>
  );
}

export default Waiter;