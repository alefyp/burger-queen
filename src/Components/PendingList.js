import React from "react";
import {
  timeFormater,
  dateFormater,
  sortAscDate,
} from "./functions/dateHandler";
import styles from "../css/PendingList.module.css";
import Subtitle from "./Subtitle";
import Button from "./Button";
import Stopwatch from "./Stopwatch";

const PendingList = (props) => {
  const list = sortAscDate(props.orders).map((individualOrder, index) => {
    console.log(individualOrder);
    return (
      <li className={styles.target} key={index}>
        <div className={styles.header}>
          <Subtitle text={individualOrder.client} color="whitesmoke" />
          <p>Código de orden: {individualOrder.id}</p>
          <Stopwatch time={individualOrder[props.entrancy]} />
        </div>
        {!individualOrder.cookedAt && <p>{individualOrder.comments}</p>}
        {individualOrder.order.map((subitem, index) => {
          return (
            <div className={styles.items} key={index}>
              <div className={styles.border}>
                <p>{subitem.item}</p>
              </div>
              <div className={(styles.border, styles.quantity)}>
                <p>{subitem.cantidad}</p>
              </div>
            </div>
          );
        })}
        <br></br>

        {individualOrder.cookedAt && (
          <Subtitle text={"Total: $" + individualOrder.total} color="black" />
        )}
        <p className={styles.time}>
          Entrada: {timeFormater(individualOrder[props.entrancy])}{" "}
          {dateFormater(individualOrder[props.entrancy])}
        </p>

        <Button
          text="Check!"
          onClick={() => {
            props.handler(individualOrder.id);
          }}
        />
      </li>
    );
  });

  return <ul className={styles.pending}>{list}</ul>;
};

export default PendingList;
