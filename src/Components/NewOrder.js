import React from 'react';

import { useState } from 'react';

import cafe_americano from '../media/menu/cafe_americano.jpg'
import items from '../items.json'

const NewOrder = () => {

  const [meal, setMeal] = useState("breakfast");

  return (
    <div>
      <h1> Nueva orden</h1>
      <button onClick={() => setMeal("breakfast")}>Desayuno</button>
      <button onClick={() => setMeal("lunch")}>Lunch</button>
      <FoodItem items={items} meal={meal} />
    </div>
  );
}

const FoodItem = (props) => {
  //no puedo creer que molesté a todos por esto XDDDDDDDDDD
  const list = props.items[props.meal];

  const listItems = list.map((e) =>
    <li key={e.name}>
      <h3>{e.name}</h3>
      <p>Precio: {e.price}</p>
      <img src={process.env.PUBLIC_URL + e.img} />
      {/* No vamos a hablar de porque estoy dejando las imagenes en cache:V */}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}


export default NewOrder;