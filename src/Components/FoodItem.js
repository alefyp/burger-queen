import React from 'react';
import '../css/FoodItem.css';
import { useState } from 'react';

export const FoodItem = (props) => {
  //no puedo creer que molesté a todos por esto XDDDDDDDDDD
  const list = props.items[props.meal];
  const clientOrder = {}; //tiene que estar más arriba, si queda un state más arriba se pueden hacer menús 

  //no sé cómo hacer esto
  function setBurgertypeHandler(value, target) {
    console.log(value, target);
  }

  //esto debe ir al state 
  function addItem(name) {
    clientOrder[name] = clientOrder[name] + 1 || 1;
  }

  const [clientOrder, setClientOrder] = useState({ clientOrder });
  const [burgertype, setBurgertype] = useState("Res");

  const listItems = list.map((e) => <li key={(e.name).replaceAll(" ", "").toLowerCase()} onClick={() => addItem(e.name)}>
    <img className="item-img" src={process.env.PUBLIC_URL + e.img} />
    <div className="item-description">
      <h4>{e.name}</h4>
      <p><strong>Precio: ${e.price}</strong></p>

      {e.type != undefined &&
        <select
          key={(e.name).replace(" ", "")}
          id={(e.name).replace(" ", "").toLowerCase()}
          value={burgertype}
          placeholder="res"
          onChange={(e) => setBurgertypeHandler(e.target.value, e.target.id)}
          onBlur={(e) => setBurgertype(e.target.value)}
        >
          <option>Opciones: </option>
          {e.type.map((types) => (
            <option key={types} value={types}>{types}</option>
          ))}
        </select>
      }
    </div>
  </li >
  );

  return (
    <ul className="menu-list">{listItems}</ul>

  );
};
