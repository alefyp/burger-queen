import React from 'react';

import { useState } from 'react';

import cafe_americano from '../media/menu/cafe_americano.jpg';
import '../css/NewOrder.css';
import items from '../items.json'
import { FoodItem } from './FoodItem';

const NewOrder = () => {

  const [meal, setMeal] = useState("breakfast");

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

        <FoodItem items={items} meal={meal} />
      </div>

      <div className="client-bill">
        La factura
      </div>

    </div>
  );
}

export default NewOrder;