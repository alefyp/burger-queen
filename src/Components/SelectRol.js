import React from 'react';
import FloatLogo from './FloatLogo'
import '../css/SelectRol.css';
import chef from '../media/chef.jpg'
import waiter from '../media/waiter.jpg'

const SelectRol = () => {
  return (
    <div className="Select-rol">
      <h1>Selecciona tu rol:</h1>

      <div className="rol-options-container">
        <div className="rol-option">
          <img src={chef} className="rol-option-img" />
          <button>Cocinero</button>
        </div>
        <div className="rol-option">
          <img src={waiter} className="rol-option-img" />
          <button>Mesero</button>
        </div>
      </div>

    </div>
  );
}

export default SelectRol;