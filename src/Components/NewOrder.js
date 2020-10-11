import React from 'react';

import { useState } from 'react';
import '../css/FoodItem.css';

import '../css/NewOrder.css';
import items from '../items.json'


const NewOrder = () => {


  const [clientOrder, setClientOrder] = useState({});
  const [burgertype, setBurgertype] = useState("Res");
  const [meal, setMeal] = useState("breakfast");



  function addItem(name) {
    clientOrder[name] = clientOrder[name] + 1 || 1;
    setClientOrder(clientOrder);
    console.log(clientOrder);
  }

  const list = items[meal];

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
          onChange={(e) => setBurgertype(e.target.value)}
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

  // const Bill = Object.keys(clientOrder).map((e) => <p key={e}>{e}</p>)



  return (
    <div className="add-new-order">
      <div className="new-order">
        <div className="new-order-header">
          <h2> Añadir items: </h2>
          <form>
            <label>
              Cliente:
            <input id="client-name" type="text" />
            </label>
          </form>
        </div>

        <button className="button-meal-option" onClick={() => setMeal("breakfast")}>Desayuno</button>
        <button className="button-meal-option" onClick={() => setMeal("lunch")}>Lunch</button>

        <ul className="menu-list">{listItems}</ul>
      </div>

      <div className="client-bill">
        Aquí va: {Object.keys(clientOrder).map((e) => <p key={e}>{e}, cantidad: {clientOrder[e]}</p>)}
      </div>

    </div>
  );
}

export default NewOrder;