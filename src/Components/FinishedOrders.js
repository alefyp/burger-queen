import React, { useState, useEffect } from 'react';
import styles from '../css/FinishedOrders.module.css';
import db from '../firebaseConfig';
import Title from './Title';
import { sortAscDate, sortDescDate, dateFormater, timeFormater, timeDifference } from './functions/dateHandler';

const FinishedOrders = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]); //Recibo el objeto que hice, pero lo manejo con array


  //puedo mover esto a otro componente tranquilamente
  const List = () => {
    return (
      <ul>
        {sortDescDate(orders).map((individualOrder, index) => {
          console.log();
          return (
            <li key={index}>
              <p>Cliente: {individualOrder.client}</p>
              <p>Código de orden: {individualOrder.id}</p>
              <p>Tiempo de preparación: {timeDifference(individualOrder.cookedAt, individualOrder.createdAt)}</p>
            </li>
          );
        })}
      </ul>
    );
  }



  useEffect(() => {
    db.collection("orders").where("state", "==", "cooked").onSnapshot((querySnapshot) => {

      const totaldecosas = [];
      querySnapshot.forEach((doc) => {
        totaldecosas.push({
          client: doc.data().client,
          createdAt: doc.data().createdAt.seconds,
          cookedAt: doc.data().cookedAt.seconds,
          // order: doc.data().order,
          comments: doc.data().comments,
          servedAt: doc.data().servedAt,
          id: doc.id
        });
        setIsLoaded(true);
      });

      setOrders(totaldecosas);
    });
  }, []);

  if (!isLoaded) {
    return (<div className={styles.container}>
      <p>Holongo holongo</p>
    </div>);
  } else {
    return (
      <div className={styles.container}>
        <Title text={"- Listas pillas! -"} />
        <List />
      </div>
    );
  }
}

export default FinishedOrders;