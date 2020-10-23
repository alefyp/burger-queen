import React from 'react';
import FinishedOrders from './FinishedOrders';
import style from '../css/ActiveOrders.module.css';
import CheckListChef from './CheckListChef';

const ActiveOrdersChef = () => {
  return (
    <div className={style.container}>
      <CheckListChef />
      <FinishedOrders title="Últimas ordenes cocinadas:" state="cookedAt" />
    </div>
  );
}

export default ActiveOrdersChef;