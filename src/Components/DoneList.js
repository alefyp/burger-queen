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

            <p><span role="img">✔️</span> Código de orden: {individualOrder.id}</p>
            <p><span role="img">🍟</span> Salida de cocina: {timeFormater(individualOrder.cookedAt)} {dateFormater(individualOrder.cookedAt)}</p>
            <p><span role="img">⏲</span> Tiempo de preparación: {timeDifference(individualOrder.cookedAt, individualOrder.createdAt)}</p>
            <p><span role="img">⏲ </span>Servicio a Mesa: {(individualOrder.servedAt === "Pendiente") ? individualOrder.servedAt : ` ${timeFormater(individualOrder.servedAt.seconds)} ${dateFormater(individualOrder.servedAt.seconds)} `}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default DoneList;