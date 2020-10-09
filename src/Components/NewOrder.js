import React from 'react';

import cafe_americano from '../media/menu/cafe_americano.jpg'
import items from '../items.json'

const NewOrder = () => {

  // console.log(items)


  return (
    <div>
      <h1>Nueva orden</h1>

      <form>
        <label htmlFor="client">
          Cliente:
        <input id="client" name="cliente" type="text" />
        </label>
      </form>


      <FoodItem items={items} />


    </div>
  );
}



const FoodItem = (props) => {

  const list = props.items.breakfast;

  const listItems = list.map((e) =>
    <li key={e.name}>
      <h3>{e.name}</h3>
      <p>Precio: {e.price}</p>
      <img src={process.env.PUBLIC_URL + e.img} alt="logo" />
    </li>
  );

  return (
    <ul>{listItems}</ul>
  )
}


export default NewOrder;