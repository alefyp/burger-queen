import React from 'react';
import db from '../firebaseConfig'

const Bill = (props) => {

  const orderElements = Object.keys(props.order);

  const list = orderElements.map((e) => {
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

  const sendOrder = () => {

    const order = orderElements.map((key) => {
      return {
        item: key,
        cantidad: props.order[key].quantity
      }
    });

    const orderToKitchen = {
      client: props.client,
      order: order,
      createdAt: new Date()
    }

    if (props.comments) {
      orderToKitchen.comments = props.comments;
    }

    db.collection('orders').add(orderToKitchen).then((e) => {
      props.orderSent({}); //reinicio el objeto en el parent para iniciar desde cero :D
      props.clientSent("Por favor ingresa el nombre del cliente");
      props.commentsSent("");
      alert("order updated!"); //No necesaria, ver si la cambio por un modal
    }).catch(console.error);

  }

  if (orderElements.length === 0) {
    return (
      <div className="bill-container">
        <h3>Haz click en cualquier item de la carta para iniciar una nueva orden :)</h3>
      </div>
    );
  } else {
    return (
      <div className="bill-container">
        <p className="bill-client">Cliente: {props.client}</p>
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
        <p>{props.comments}</p>
        <button className="bill-button" onClick={(() => { sendOrder() })}>Enviar a la cocina!</button>
      </div>
    );
  }
}

export default Bill;