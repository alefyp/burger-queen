import React, { useState, useEffect } from 'react';
import styles from '../css/OrderList.module.css';
import db from '../firebaseConfig';
import Subtitle from './Subtitle';
import Title from './Title';

const OrdersList = () => {

  //las funciones para que funcione la hora xd
  const dateFormater = (seconds) => {
    const dateObject = new Date(seconds * 1000);
    const humanDateFormat = dateObject.toDateString();
    return humanDateFormat;
  }

  const timeFormater = (seconds) => {
    const dateObject = new Date(seconds * 1000);
    const humanTimeFormat = dateObject.toLocaleTimeString();
    return humanTimeFormat;
  }

  //los hookazos prih
  const [error, setError] = useState(null); //onsnapshot no tiene catch (????)
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]); //Recibo el objeto que hice, pero lo manejo con array

  //El use effect pa traer la data real time
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
        })
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

  const sortAscDate = (orders) => {
    var byDate = orders.slice(0);
    byDate.sort(function (a, b) {
      return a.createdAt - b.createdAt;
    });
    return byDate;
  }

  //la lista bien bonitica

  const pendingList = sortAscDate(orders).map((individualOrder, index) => {
    return (<li className={styles.target} key={index}>
      <Subtitle text={individualOrder.client} color={"black"} />
      <p>-------------------</p>
      <p>{individualOrder.comments}</p>
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
      <p>-------------------</p>
      <p className={styles.time}>Hora Entrada: {timeFormater(individualOrder.createdAt)} {dateFormater(individualOrder.createdAt)}</p>
      <button className={styles.button} onClick={() => { checkCookState(individualOrder.id) }}>Check!</button>
    </li>)
  });

  // renderizado condicional

  if (error) {
    return <div className={styles.container}>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className={styles.container}><h2>Aún no hay ordenes! uwu</h2></div>;
  } else {

    return (
      <div className={styles.container}>
        <Title text={"- Pendientes -"} color={"black"} />
        <div className={styles.pendings}>{pendingList}</div>
      </div>
    );
  }
}


export default OrdersList;
