import React from 'react';
import { useState } from 'react';
import styles from '../css/NewOrder.module.css';
import items from '../items.json'; //Desde aquí mando el menu json file: items.json
import List from './ItemList';
import Bill from './Bill';
import Title from './Title'
import Input from './Input';
import Button from './Button';

const NewOrder = () => {

  const [meal, setMeal] = useState("breakfast");
  const [clientName, setClientName] = useState("");
  const [comments, setComments] = useState("");
  const [clientOrder, setClientOrder] = useState({}); //aquí va la orden generada

  const addItem = (item, price) => {
    if (clientOrder[item]) {
      clientOrder[item].quantity += 1;
    } else {
      clientOrder[item] = { quantity: 1, price: price };
    }
    setClientOrder({ ...clientOrder });
  }

  const removeItem = (item) => {
    clientOrder[item].quantity = clientOrder[item].quantity - 1;
    if (clientOrder[item].quantity <= 0) {
      delete clientOrder[item];
    }
    setClientOrder({ ...clientOrder });
  }

  return (
    <div className={styles.container}>
      <div className={styles.addContainer}>
        <Title text="- Nueva orden -" color="black" />

        <form className={styles.form}>
          <Input name={clientName} label="Cliente" type="text" placeholder="Víctor" handler={setClientName} />
          <Input name={comments} label="Comentarios:" type="text" placeholder="Hamburguesa sin cebolla!" handler={setComments} />
        </form>

        <div className={styles.options}>
          <Button onClick={() => setMeal("breakfast")} text="Desayuno" />
          <Button onClick={() => setMeal("lunch")} text="Lunch" />
        </div>

        <List items={items} meal={meal} addItem={addItem} />

      </div>

      <Bill
        client={clientName}
        comments={comments}
        order={clientOrder}
        items={items}
        removeItem={removeItem}
        orderSent={setClientOrder}
        clientSent={setClientName}
        commentsSent={setComments}
      />

    </div>
  );

}



export default NewOrder;