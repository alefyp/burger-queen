import React from 'react';
import styles from '../css/Titles.module.css'

//texto y color

const Title = (props) => {
  return (
    <h2 style={{ color: props.color }} className={styles.title}>{props.text}</h2>
  );
}

export default Title;