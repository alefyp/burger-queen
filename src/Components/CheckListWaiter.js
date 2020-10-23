import React, { useState, useEffect } from 'react';
import styles from '../css/CheckList.module.css';
import db from '../firebaseConfig';
import Title from './Title';
import PendingList from './PendingList';

const CheckListWaiter = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("orders").where("state", "==", "cooked").onSnapshot((querySnapshot) => {
      const totaldecosas = [];
      querySnapshot.forEach((doc) => {
        totaldecosas.push({
          client: doc.data().client,
          cookedAt: doc.data().cookedAt.seconds,
          order: doc.data().order,
          comments: doc.data().comments,
          id: doc.id
        });
        setIsLoaded(true);
      });
      setOrders(totaldecosas);
    });
  }, []);

  const checkServedState = (id) => {
    const orderId = db.collection("orders").doc(id);
    orderId.update({
      state: "served",
      servedAt: new Date()
    });
  }

  // renderizado condicional

  if (!isLoaded) {
    return (
      <div className={styles.container}>
        <Title text="Esperando ordenes..." />
      </div>);
  } else {
    return (
      <div className={styles.container}>
        <Title text="Pendientes por servir" color="black" />
        <PendingList orders={orders} handler={checkServedState} entrancy="cookedAt" />
      </div>
    );
  }
}


export default CheckListWaiter;

