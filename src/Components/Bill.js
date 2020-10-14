import React from 'react';
import { useState } from 'react';

const Bill = (props) => {

  const orderElements = Object.keys(props.order);


  const list = orderElements.map((e) => {
    console.log(orderElements, props.order)
    return (
      <li key={e} className="bill-item">
        <div className="bill-item-name">
          <p>{e}</p>
        </div>
        <div className="bill-item-quantity">
          <p> {props.order[e].quantity}</p>
        </div>
        <div className="bill-item-semitotal">
          <p>${props.order[e].quantity * props.order[e].price}</p>
        </div>
        <button className="bill-item-delete-button" onClick={(() => { props.removeItem(e) })}>x</button>
      </li>
    )
  });

  const total = orderElements.reduce((prevTotal, key) => {
    return prevTotal + props.order[key].quantity * props.order[key].price
  }, 0);

  return (
    <div className="bill-container">
      <p className="bill-client">Cliente: Alejandra</p>
      <li key="title" className="bill-item">
        <div className="bill-item-name">
          <p>Item</p></div>
        <div className="bill-item-quantity">
          <p>Cant.</p></div>
        <div className="bill-item-semitotal">
          <p>Total</p></div>
      </li>
      <ul>{list}</ul>
      <h3 className="bill-total">Total: ${total}</h3>
      <button>Enviar a la cocina!</button>
    </div>

  );
}

export default Bill;