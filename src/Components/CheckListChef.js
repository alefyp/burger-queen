import React, { useState, useEffect } from 'react';
import styles from '../css/CheckList.module.css';
import db from '../firebaseConfig';
import Subtitle from './Subtitle';
import PendingList from './PendingList';

const CheckListChef = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("orders").where("state", "==", "taken").onSnapshot((querySnapshot) => {
      const totaldecosas = [];
      querySnapshot.forEach((doc) => {
        totaldecosas.push({
          client: doc.data().client,
          createdAt: doc.data().createdAt.seconds,
          order: doc.data().order,
          comments: doc.data().comments,
          id: doc.id
        });
        setIsLoaded(true);
      });
      setOrders(totaldecosas);
    });

  }, []);

  const checkCookState = (id) => {
    const orderId = db.collection("orders").doc(id);
    orderId.update({
      state: "cooked",
      cookedAt: new Date()
    });
  }

  // renderizado condicional

  if (!isLoaded) {
    return (
      <div className={styles.container}>
        <Subtitle text="Esperando ordenes..." color="black" />
      </div>);
  } else if (orders.length === 0) {
    return (
      <div className={styles.container}>
        <Subtitle text="All done! No hay ordenes pendientes... por ahora uwu" color="black" />
      </div>);
  } else {
    return (
      <div className={styles.container}>
        <Subtitle text="Pendientes por cocinar" color="black" />
        <PendingList orders={orders} handler={checkCookState} entrancy="createdAt" />
      </div>
    );
  }
}


export default CheckListChef;
