import React from "react";
import Title from "./Title";
import styles from "../css/TitleWithBadge.module.css";

const TitleWithBadge = (props) => {
  return (
    <div className={styles.container}>
      <h1>
        {props.text}{" "}
        <span className={styles.notification}>{props.notificationData}</span>
      </h1>
    </div>
  );
};

export default TitleWithBadge;
