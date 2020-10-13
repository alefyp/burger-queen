import React from 'react';
import { useState } from 'react';

const Bill = (props) => {

  const orderElements = Object.keys(props.order);


  const list = orderElements.map((e) => {
    console.log(orderElements, props.order)
    return (
      <li key={e} >
        {e}, cantidad: {props.order[e].quantity}, total= {props.order[e].quantity * props.order[e].price}
        <button onClick={(() => { props.removeItem(e) })}>x</button>
      </li>
    )
  });

  const total = orderElements.reduce((prevTotal, key) => {
    return prevTotal + props.order[key].quantity * props.order[key].price
  }, 0);

  return (
    <div className="bill-container">
      <ul>{list}</ul>
      <h3>Total: ${total}</h3>
    </div>

  );
}

export default Bill;