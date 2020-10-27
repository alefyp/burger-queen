import React from 'react';
import styles from '../css/Input.module.css';

const Input = (props) => {
  return (
    <label className={styles.label} htmlFor={props.name}>
      {props.label}
      <input
        className={styles.input}
        id={props.id}
        value={props.name}
        type={props.type}
        name={props.name}
        autoComplete={props.name}
        placeholder={props.placeholder}
        required
        onChange={(e) => { props.handler(e.target.value) }}
      />
    </label>
  );
}

export default Input;
