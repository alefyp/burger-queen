import React from 'react';
import styles from '../css/Button.module.css';

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>{props.text}</button>
  );
}

export default Button;