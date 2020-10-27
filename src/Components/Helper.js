import React from 'react';
import Title from './Title';
import { ReactComponent as HelperImage } from '../media/horizontal-to-vertical.svg';
import styles from '../css/Helper.module.css';

const Helper = () => {
  return (
    <div className={styles.container}>
      <h1>BurgerQueen!</h1>
      <HelperImage className={styles.svg} />
      <Title text="Para una mejor experiencia te recomendamos usar tu dispositivio de manera horizontal" color="black" />
    </div>
  );
}

export default Helper;