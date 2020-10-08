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
      <p>nada por ahora</p>
    </div>
  );
}

export default Chef;