import React from 'react';
import {
  useRouteMatch,
  Link
} from 'react-router-dom';
import styles from '../../css/SelectRol.module.css';
import chef from '../../media/chef.jpg';
import waiter from '../../media/waiter.jpg';
import Title from '../Title';


const SelectRol = () => {

  let { url } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Title text={"Selecciona tu rol"} color={"black"} />
      <ul className={styles.rol}>
        <li key="owo" className={styles.option}>
          <img src={chef} className={styles.img} alt="chef" />
          <Link to={`${url}/chef/activeorders`} className={styles.text}>Cocinero</Link>
        </li>
        <li key="uwu" className={styles.option}>
          <img src={waiter} className={styles.img} alt="waiter" />
          <Link to={`${url}/waiter/neworder`} className={styles.text}>Mesero</Link>
        </li>
      </ul>
    </div>
  );
}

export default SelectRol;