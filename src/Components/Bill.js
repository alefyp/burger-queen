import React from 'react';
import db from '../firebaseConfig';
import Subtitle from './Subtitle';
import styles from '../css/Bill.module.css';
import { ReactComponent as Add } from '../media/add.svg';
import Button from './Button';

const Bill = (props) => {

  const orderElements = Object.keys(props.order);

  const list = orderElements.map((e) => {
    return (
      <li key={e} className={styles.li}>
        <div className={styles.itemName}>
          <p>{e}</p>
        </div>
        <div className={styles.esp}>
          <p> {props.order[e].quantity}</p>
        </div>
        <div className={styles.esp}>
          <p>${props.order[e].quantity * props.order[e].price}</p>
        </div>
        <button className={styles.delete} onClick={(() => { props.removeItem(e) })}>x</button>
      </li>
    )
  });

  const total = orderElements.reduce((prevTotal, key) => {
    return prevTotal + props.order[key].quantity * props.order[key].price
  }, 0);

  const sendOrder = () => {
    const order = orderElements.map((key) => {
      return {
        item: key,
        cantidad: props.order[key].quantity
      }
    });

    const orderToKitchen = {
      client: props.client,
      order: order,
      createdAt: new Date(),
      state: "taken", //lo voy a actualizar a tres estados: taken, cooked, served
      total: total
    }

    if (props.comments) {
      orderToKitchen.comments = props.comments;
    }

    props.orderSent({}); //reseteo el estado desde arriba :D
    props.clientSent("");
    props.commentsSent("");

    db.collection('orders').add(orderToKitchen).then((e) => {

      alert("order updated!"); //No necesaria, ver si la cambio por un modal
    }).catch(console.error);
  }

  if (orderElements.length === 0) {
    return (
      <div className={styles.container}>
        <Add />
        <Subtitle text="Haz click en cualquier item de la carta para iniciar una nueva orden :)" color="white" />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <p className={styles.total}>Cliente: {props.client}</p>

        <ul className={styles.ul}>
          <li key="title" className={styles.li}>
            <div className={styles.itemName}>
              <p>Item</p></div>
            <div className={styles.esp}>
              <p>Cant.</p></div>
            <div className={styles.esp}>
              <p>Total</p></div>
          </li>
          {list}
        </ul>
        <p className={styles.total}>Total: ${total} </p>
        <p className={styles.total}>{props.comments}</p>
        <Button onClick={(() => { sendOrder() })} text="Enviar a la cocina" />
      </div>
    );
  }
}

export default Bill;