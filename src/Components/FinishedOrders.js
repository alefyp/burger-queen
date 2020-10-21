import React from 'react';
import styles from '../css/FinishedOrders.module.css'
import Title from './Title'

const FinishedOrders = () => {
  return (
    <div className={styles.container}>
      <Title text={"- Listas pillas! -"} />
    </div>
  );
}

export default FinishedOrders;