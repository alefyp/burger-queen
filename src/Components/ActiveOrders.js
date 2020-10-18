import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';

const ActiveOrders = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]); //Recibo el objeto que hice, pero lo manejo con array

  useEffect(() => {
    fetch("https://us-central1-burgerqueen-7f75c.cloudfunctions.net/ordersApi")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setOrders(result.orders);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []); //Aquí termina el UseEffect

  //esto puede ir enotro, no olvidar el prop al pasarlo
  const orderData = orders.map((order) => {
    console.log(order)
    return (
      <li className="black" key={order.doc}>
        <p>Cliente:{order.cliente}</p>
        <p>{order.comments}</p>
        {
          order.order.map((subitem, index) => {
            return (
              <p>{subitem.item}, {subitem.cantidad}</p>
            )
          })
        }
        <p>Seg: {order.hora._seconds} Nanoseg:{order.hora._nanoseconds}  Es más fácil restar en unix</p>
        <button>Terminado</button>

        {/* aquí mandarle order.doc al botón */}
      </li>
    );
  });

  const mealFinished = () => {
    db.collection('orders').doc('aquí va el id raro').update().then((e) => { //tengo que guardar el id del doc de cada orden
      alert("meal updated!"); //No necesaria, ver si la cambio por un modal
    }).catch(console.error);
  }


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando ordenes desde la api...</div>;
  } else {
    return (
      <div>
        <h2>- Pendientes -</h2>
        <ul>
          {orderData}
        </ul>
        <h2>- Terminados -</h2>
      </div>
    );
  }
}

export default ActiveOrders;