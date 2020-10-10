import React from 'react';
import '../css/FoodItem.css';

export const FoodItem = (props) => {
  //no puedo creer que molesté a todos por esto XDDDDDDDDDD
  const list = props.items[props.meal];

  const listItems = list.map((e) => <li key={e.name}>
    <h3>{e.name}</h3>
    <p>Precio: {e.price}</p>
    <img className="item-img" src={process.env.PUBLIC_URL + e.img} />

  </li>
  );

  return (
    <ul className="menu-list">{listItems}</ul>
  );
};
