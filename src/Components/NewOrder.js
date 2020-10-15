import React from 'react';

import { useState } from 'react';

import '../css/NewOrder.css';
import items from '../items.json'; //Desde aquí mando el menu json file: items.json
import List from './ItemList';
import Bill from './Bill';

// Este va a ser stateful y los hijos (ver menu) (factura)
// stateless para renderizar, vamsoa  intentarlo xD

const NewOrder = () => {

  const [meal, setMeal] = useState("breakfast");
  const [clientName, setClientName] = useState("-- Por favor ingresa el nombre del cliente ---- ");
  const [comments, setComments] = useState("-- Sin comentarios -- ");

  const [clientOrder, setClientOrder] = useState({}); //aquí va la orden generada

  const addItem = (item, price) => {
    if (clientOrder[item]) {
      clientOrder[item].quantity += 1;
    } else {
      clientOrder[item] = { quantity: 1, price: price };
    }
    setClientOrder({ ...clientOrder });
  }

  const removeItem = (item) => {
    clientOrder[item].quantity = clientOrder[item].quantity - 1;
    if (clientOrder[item].quantity <= 0) {
      delete clientOrder[item];
    }
    setClientOrder({ ...clientOrder });
  }

  return (
    <div className="new-order-container">
      <div className="new-order-add">
        <h2>- Nueva orden -</h2>

        <div className="client-name-form">
          <label>
            Cliente:
        <input
              type="text" required
              name="name"
              placeholder="Juanito uwu"
              required
              onChange={(e) => setClientName(e.target.value)} />
          </label>
          <label>
            Comentarios:
        <input
              type="text" required
              name="comments"
              placeholder="La hamburguesa sin cebolla!"
              onChange={(e) => setComments(e.target.value)} />
          </label>
        </div>

        <div className="new-order-meal-options">
          <button onClick={() => setMeal("breakfast")}>Desayuno</button>
          <button onClick={() => setMeal("lunch")}>Lunch</button>
        </div>

        <List items={items} meal={meal} addItem={addItem} />

      </div>

      <Bill client={clientName} comments={comments} order={clientOrder} items={items} removeItem={removeItem} />

    </div>
  );

}



export default NewOrder;