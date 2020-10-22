import React from 'react';
import FinishedOrders from './FinishedOrders';
import style from '../css/ActiveOrders.module.css';
import OrdersChef from './OrdersChef';

const ActiveOrders = () => {
  return (
    <div className={style.container}>
      <OrdersChef />
      <FinishedOrders />
    </div>
  );
}

export default ActiveOrders;