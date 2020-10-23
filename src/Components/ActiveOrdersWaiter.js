import React from 'react';
import style from '../css/ActiveOrders.module.css';
import FinishedOrders from './FinishedOrders';
import CheckListWaiter from './CheckListWaiter';

const ActiveOrdersWaiter = () => {
  return (
    <div className={style.container}>
      <CheckListWaiter />
      <FinishedOrders title="Últimas ordenes servidas: " state="servedAt" />
    </div>
  );
}

export default ActiveOrdersWaiter;