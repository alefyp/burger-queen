import React, { useState, useEffect } from 'react';
import db from '../firebaseConfig';
import styles from '../css/PendingOrders.module.css';
import PendingOrdersList from './PendingOrdersList'

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

  const mealFinished = () => {
    db.collection('orders').doc('aquí va el id raro').update().then((e) => { //tengo que guardar el id del doc de cada orden
      alert("meal updated!"); //No necesaria, ver si la cambio por un modal
    }).catch(console.error);
  }

  if (error) {
    return <div className={styles.container}>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className={styles.container}>Cargando ordenes desde la api... uwu</div>;
  } else {
    return (
      <div className={styles.container}>
        <h2>- Pendientes -</h2>
        <PendingOrdersList orderApi={orders} />
      </div>
    );
  }
}

export default ActiveOrders;