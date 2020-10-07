import React from 'react';
import {
  useRouteMatch,
  Link
} from 'react-router-dom';
import '../css/SelectRol.css';
import chef from '../media/chef.jpg'
import waiter from '../media/waiter.jpg'


const SelectRol = () => {

  let { url } = useRouteMatch();

  return (
    <div className="Select-rol">
      <h2>Selecciona tu rol:</h2>
      <ul className="rol-options-container">
        <li className="rol-option">
          <img src={chef} className="rol-option-img" alt="chef" />
          <Link to={`${url}/chef`}>Cocinero</Link>
        </li>
        <li className="rol-option">
          <img src={waiter} className="rol-option-img" alt="waiter" />
          <Link to={`${url}/waiter`}>Mesero</Link>
        </li>
      </ul>
    </div>
  );
}

export default SelectRol;