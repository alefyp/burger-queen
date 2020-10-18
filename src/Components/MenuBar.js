import React from 'react';
import styles from '../css/MenuBar.module.css'
import {
  useRouteMatch,
  Link
} from "react-router-dom";

const MenuBar = (props) => {

  let { url } = useRouteMatch();

  return (
    <ul className={styles.container}>
      <li>
        <h2>Burger Queen!</h2>
      </li>
      <li>
        <Link to={`${url}/${props.pathoptions[0]}`}>{props.pathoptionsname[0]}</Link>
      </li>
      <li>
        <Link to={`${url}/${props.pathoptions[1]}`}>{props.pathoptionsname[1]}</Link>
      </li>
      <li>
        <Link to="/rol">Cambiar Rol</Link>
      </li>
      <li>
        <p>Activo como: <span>{props.employee}</span></p>
      </li>
      <li>
        <Link to="/">Cerrar Sesión</Link>
      </li>
    </ul>
  );
}

export default MenuBar;