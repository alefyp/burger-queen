import React from "react";
import {
  timeDifference,
  timeFormater,
  timeFormater2,
  dateFormater,
} from "./functions/dateHandler";
import styles from "../css/DoneList.module.css";

const DoneList = (props) => {
  return (
    <ul className={styles.ul}>
      {props.orders.map((individualOrder, index) => {
        return (
          <li key={index} className={styles.li}>
            <div className={styles.div}>
              <p>Cliente: {individualOrder.client}</p>
            </div>

            <p>Código de orden: {individualOrder.id}</p>
            <p>
              Salida de cocina: {timeFormater(individualOrder.cookedAt)}{" "}
              {dateFormater(individualOrder.cookedAt)}
            </p>
            <p>
              Tiempo de preparación:{" "}
              {timeFormater2(
                individualOrder.cookedAt - individualOrder.createdAt
              )}
            </p>
            {individualOrder.servedAt !== undefined && (
              <div className={styles.served}>
                <p>
                  <span role="img" aria-label="check">
                    ✔️
                  </span>{" "}
                  Servido en Mesa: {timeFormater(individualOrder.servedAt)}{" "}
                  {dateFormater(individualOrder.servedAt)}
                </p>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default DoneList;
