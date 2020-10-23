import React, { useState, useEffect } from 'react';
import styles from '../css/CheckList.module.css';
import db from '../firebaseConfig';
import Subtitle from './Subtitle';
import Title from './Title';
import { timeFormater, dateFormater, sortAscDate } from './functions/dateHandler';

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

  const PendingList = () => sortAscDate(orders).map((individualOrder, index) => {
    return (<li className={styles.target} key={index}>
      <Subtitle text={individualOrder.client} color={"black"} />
      <p>Código de orden: {individualOrder.id}</p>
      <p>-------------------</p>

      {
        individualOrder.order.map((subitem, index) => {
          return (
            <div className={styles.items} key={index}>
              <div className={styles.border}>
                <p>{subitem.item}</p>
              </div>
              <div className={styles.border}>
                <p>{subitem.cantidad}</p>
              </div>
            </div>
          )
        })
      }
      <p>{individualOrder.comments}</p>
      <p>-------------------</p>
      <p className={styles.time}>Hora Entrada: {timeFormater(individualOrder.createdAt)} {dateFormater(individualOrder.createdAt)}</p>
      <button className={styles.button} onClick={() => { checkCookState(individualOrder.id) }}>Check!</button>
    </li>)
  });

  // renderizado condicional

  if (!isLoaded) {
    return <div className={styles.container}><h2>Esperando por ordenes uwu</h2></div>;
  } else {
    return (
      <div className={styles.container}>
        <Title text={"- Pendientes -"} color={"black"} />
        <div className={styles.pendings}>
          <PendingList />
        </div>
      </div>
    );
  }
}


export default CheckListChef;
