import React from 'react';
import styles from '../css/PendingOrdersList.module.css';

const PendingOrdersList = (props) => {

  const orderData = props.orderApi.map((order) => {
    console.log(order)
    return (
      <li className={styles.target} key={order.doc}>
        <p>Cliente:{order.cliente}</p>
        <p>{order.comments}</p>
        {
          order.order.map((subitem, index) => {
            return (
              <div className={styles.items} key={index}>
                <div>
                  <p>{subitem.item}</p>
                </div>
                <div>
                  <p>{subitem.cantidad}</p>
                </div>

              </div>
            )
          })
        }
        <p>Seg: {order.hora._seconds} Nanoseg:{order.hora._nanoseconds}  Es más fácil restar en unix</p>
        <button className={styles.button}>Check!</button>

        {/* aquí mandarle order.doc al botón */}
      </li>
    );
  });

  return (
    <ul className={styles.container}>{orderData}</ul>
  );
}

export default PendingOrdersList;