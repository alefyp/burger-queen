import React, { useState, useEffect } from 'react';
import styles from '../css/CheckList.module.css';
import db from '../firebaseConfig';
import Title from './Title';
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
      cookedAt: new Date(),
      servedAt: "Pendiente"
    });
  }

  // renderizado condicional

  if (!isLoaded) {
    return <div className={styles.container}><h2>Esperando por ordenes uwu</h2></div>;
  } else {
    return (
      <div className={styles.container}>
        <Title text={"- Pendientes -"} color={"black"} />
        <PendingList orders={orders} handler={checkCookState} />
      </div>
    );
  }
}


export default CheckListChef;
