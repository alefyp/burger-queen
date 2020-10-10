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
        <h1> Nueva orden</h1>
        <button onClick={() => setMeal("breakfast")}>Desayuno</button>
        <button onClick={() => setMeal("lunch")}>Lunch</button>
        <FoodItem items={items} meal={meal} />
      </div>
      <div className="client-bill">
        La factura
      </div>

    </div>
  );
}

export default NewOrder;