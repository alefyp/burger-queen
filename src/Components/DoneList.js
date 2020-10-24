import React from 'react';
import { timeDifference, timeFormater, dateFormater } from './functions/dateHandler';
import styles from '../css/DoneList.module.css';

const DoneList = (props) => {
  return (
    <ul className={styles.ul}>
      {props.orders.map((individualOrder, index) => {



        console.log();
        return (
          <li key={index} className={styles.li}>
            <div className={styles.div}>
              <p><span role="img">💁</span>Cliente: {individualOrder.client}</p>
            </div>

            <p><span role="img" aria-label="check">✔️</span> Código de orden: {individualOrder.id}</p>
            <p><span role="img" aria-label="french fries">🍟</span> Salida de cocina: {timeFormater(individualOrder.cookedAt)} {dateFormater(individualOrder.cookedAt)}</p>
            <p><span role="img" aria-label="timer">⏲</span> Tiempo de preparación: {timeDifference(individualOrder.cookedAt, individualOrder.createdAt)}</p>
            {individualOrder.servedAt !== undefined &&
              <p className={styles.served}><span role="img" aria-label="check">✔️</span> Servido en Mesa: {timeFormater(individualOrder.servedAt)} {dateFormater(individualOrder.servedAt)}</p>
            }
          </li>
        );
      })}
    </ul>
  );
}

export default DoneList;