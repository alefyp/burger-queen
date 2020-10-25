import React, { useState, useEffect } from 'react';
import styles from '../css/FinishedOrders.module.css';
import db from '../firebaseConfig';
import Subtitle from './Subtitle';
import DoneList from './DoneList';

const FinishedOrders = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    db.collection("orders").orderBy(props.state, "desc").limit(5).onSnapshot((querySnapshot) => {
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
      <Subtitle text="Cargando ordenes listas..." color="white" />
    </div>);
  } else {
    return (
      <div className={styles.container}>
        <Subtitle text={props.title} color="white" />
        <DoneList orders={orders} />
      </div>
    );
  }
}

export default FinishedOrders;