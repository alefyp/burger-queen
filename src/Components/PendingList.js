import React from 'react';
import { timeFormater, dateFormater, sortAscDate } from './functions/dateHandler';
import styles from '../css/PendingList.module.css';
import Subtitle from './Subtitle';

const PendingList = (props) => {

  const list = sortAscDate(props.orders).map((individualOrder, index) => {
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
      <button className={styles.button} onClick={() => { props.handler(individualOrder.id) }}>Check!</button>
    </li>)
  });

  return (
    <ul className={styles.pending}>{list}</ul>
  )
}


export default PendingList;