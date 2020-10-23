import React from 'react';
import style from '../css/ActiveOrders.module.css';
import FinishedOrders from './FinishedOrders';

const ActiveOrdersWaiter = () => {
  return (
    <div className={style.container}>
      <h2>pasito</h2>
      <FinishedOrders title="Últimas ordenes servidas: " state="servedAt" />
    </div>
  );
}

export default ActiveOrdersWaiter;