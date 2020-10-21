import React from 'react';
import FinishedOrders from './FinishedOrders';
import style from '../css/ActiveOrders.module.css';
import OrdersList from './OrderList';

const ActiveOrders = () => {
  return (
    <div className={style.container}>
      <OrdersList />
      <FinishedOrders />
    </div>
  );
}

export default ActiveOrders;