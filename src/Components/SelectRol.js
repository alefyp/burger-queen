import React from 'react';
import FloatLogo from './FloatLogo'
import '../css/SelectRol.css';
import chef from '../media/chef.jpg'
import waiter from '../media/waiter.jpg'

const SelectRol = () => {
  return (
    <div className="flex-center select-rol-container" >
      <FloatLogo />
      <h2>Selecciona tu rol:</h2>
      <div className="not-found">
        <div className="select-rol">
          <img src={chef} className="rol-option-img" />
          <div className="rol-option-overlay">
            <p>
              Cocinero
            </p>
          </div>
        </div>
        <div className="select-rol">
          <img src={waiter} className="rol-option-img" />
          <div className="rol-option-overlay">
            <p>Mesero</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default SelectRol;