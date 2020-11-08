import React, { useState, useEffect } from "react";
import styles from "../css/CheckList.module.css";
import db from "../firebaseConfig";
import Title from "./Title";
import TitleWithBadge from "./TitleWithBadge";
import PendingList from "./PendingList";

const CheckListWaiter = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [orders, setOrders] = useState([]);

  const totalPending = orders.length;

  useEffect(() => {
    const unsuscribe = () => {
      db.collection("orders")
        .where("state", "==", "cooked")
        .onSnapshot((querySnapshot) => {
          const totaldecosas = [];
          querySnapshot.forEach((doc) => {
            totaldecosas.push({
              client: doc.data().client,
              cookedAt: doc.data().cookedAt,
              order: doc.data().order,
              comments: doc.data().comments,
              total: doc.data().total,
              id: doc.id,
            });
            setIsLoaded(true);
          });
          setOrders(totaldecosas);
        });
    };
    unsuscribe();
  }, []);

  const checkServedState = (id) => {
    const orderId = db.collection("orders").doc(id);
    orderId.update({
      state: "served",
      servedAt: Date.now(),
    });
  };

  // renderizado condicional

  if (!isLoaded) {
    return (
      <div className={styles.container}>
        <Title text="Esperando ordenes..." />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <TitleWithBadge
          text="Ordenes Activas"
          notificationData={totalPending}
        />

        <PendingList
          orders={orders}
          handler={checkServedState}
          entrancy="cookedAt"
        />
      </div>
    );
  }
};

export default CheckListWaiter;
