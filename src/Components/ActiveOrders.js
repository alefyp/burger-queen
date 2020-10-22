import React from 'react';
import FinishedOrders from './FinishedOrders';
import style from '../css/ActiveOrders.module.css';
import OrderList from './OrderList';

const ActiveOrders = () => {
  return (
    <div className={style.container}>
      <OrderList />
      <FinishedOrders />
    </div>
  );
}

export default ActiveOrders;