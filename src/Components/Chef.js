import React from 'react';
import '../css/NotFound.css';
import MenuBar from './MenuBar';
import Wepa from './Wepa';

import {
  BrowserRouter as Router,
  useRouteMatch,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Chef = () => {

  let { url } = useRouteMatch();

  return (
    <div className="main-view">
      <MenuBar pathoptions={["Neworder", "Orderstate", "Wepa"]} employee={'Alejandra'} />

      <Switch>
        <Route path={`${url}/Neworder`}>
          <h1> hola</h1>
        </Route>
        <Route path={`${url}/OrderState`}>
          <h1>ayuda con esto</h1>
        </Route>
        <Route path={`${url}/Wepa`}>
          <Wepa />
        </Route>
      </Switch>
    </div>
  );
}

export default Chef;