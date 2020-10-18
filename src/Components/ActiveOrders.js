import React, { useState, useEffect } from 'react';

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



  const orderData = orders.map((order) => {
    console.log(order)
    return (
      <li className="black" key={order.doc}>
        <p>Cliente:{order.cliente}</p>
        <p>{order.comments}</p>

        <p>{order.order[0].item} , {order.order[0].cantidad} </p>
        <p>{order.hora}</p>
      </li>
    );
  })

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Cargando ordenes desde la api...</div>;
  } else {
    return (
      <ul>
        <h1>- Ordenes activas -</h1>
        {orderData}
      </ul>
    );
  }
}

export default ActiveOrders;