import React from 'react';
import PendingOrders from './PendingOrders';
import FinishedOrders from './FinishedOrders';
import style from '../css/ActiveOrders.module.css';

const ActiveOrders = () => {
  return (
    <div className={style.container}>
      <PendingOrders />
      <FinishedOrders />
    </div>
  );
}

export default ActiveOrders