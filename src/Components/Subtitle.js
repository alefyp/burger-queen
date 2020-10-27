import React from 'react';
import styles from '../css/Subtitle.module.css';

//texto y color

const Subtitle = (props) => {
  return (
    <h3 style={{ color: props.color }} className={styles.subtitle}>{props.text}</h3>
  );
}

export default Subtitle;