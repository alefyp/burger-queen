import React, { useState, useEffect } from 'react';
import styles from '../css/FinishedOrders.module.css';
import db from '../firebaseConfig';
import Title from './Title';
import Subtitle from './Subtitle';
import { sortDescDate, timeDifference, timeFormater, dateFormater } from './functions/dateHandler';

const FinishedOrders = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]); //Recibo el objeto que hice, pero lo manejo con array

  //puedo mover esto a otro componente tranquilamente but nope
  const CookedList = () => {
    return (
      <ul className={styles.ul}>
        {orders.map((individualOrder, index) => {
          console.log();
          return (
            <li key={index} className={styles.li}>
              <div className={styles.div}>
                <p><span role="img">💁</span>Cliente: {individualOrder.client}</p>
              </div>

              <p><span role="img">✔️</span> Código de orden: {individualOrder.id}</p>
              <p><span role="img">🍟</span> Hora de salida: {timeFormater(individualOrder.cookedAt)} {dateFormater(individualOrder.cookedAt)}</p>
              <p><span role="img">⏲</span> Tiempo de preparación: {timeDifference(individualOrder.cookedAt, individualOrder.createdAt)}</p>

            </li>
          );
        })}
      </ul>
    );
  }

  useEffect(() => {
    db.collection("orders").orderBy("cookedAt", "desc").limit(3).onSnapshot((querySnapshot) => {
      const totaldecosas = [];
      querySnapshot.forEach((doc) => {
        totaldecosas.push({
          client: doc.data().client,
          createdAt: doc.data().createdAt.seconds,
          cookedAt: doc.data().cookedAt.seconds,
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
      <Subtitle text="Esperando más ordenes listas :)" />
    </div>);
  } else {
    return (
      <div className={styles.container}>
        <Title text={"- Listas pillas! -"} />
        <CookedList />
      </div>
    );
  }


}

export default FinishedOrders;