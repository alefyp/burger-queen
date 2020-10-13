import React from 'react';

import { useState } from 'react';

import items from '../items.json'; //Desde aquí mando el menu json file: items.json
import List from './ItemList';
import ClientName from './ClientName'
import Bill from './Bill';

// Este va a ser stateful y los hijos (ver menu) (factura)
// stateless para renderizar, vamsoa  intentarlo xD

const NewOrder = () => {

  const [meal, setMeal] = useState("breakfast");
  const [clientName, setClientName] = useState("Holongo");
  const [clientOrder, setClientOrder] = useState({}); //aquí va la orden generada


  const addItem = (item) => {
    clientOrder[item] = clientOrder[item] + 1 || 1;
    setClientOrder({ ...clientOrder });
  }

  const removeItem = (item) => {
    clientOrder[item] = clientOrder[item] - 1;
    if (clientOrder[item] <= 0) {
      delete clientOrder[item];
    }
    setClientOrder({ ...clientOrder });
  }


  return (
    <div>
      <ClientName name={clientName} />

      <button onClick={() => setMeal("breakfast")}>Desayuno</button>
      <button onClick={() => setMeal("lunch")}>Almuerzo & Cena</button>

      <List items={items} meal={meal} addItem={addItem} />
      <Bill order={clientOrder} items={items} />
    </div>
  );

}



// const NewOrder = () => {

//   const [clientOrder, setClientOrder] = useState({}); //aquí va la orden generada
//   const [burgertype, setBurgertype] = useState("Res"); //todavía no lo de las hamburgesas xd
//   const [meal, setMeal] = useState("breakfast"); //aquí es para ver los dos menús
//   const [clientName, setClientName] = useState("Burger lover"); //Va para el form del nombre del cliente

//   function addItem(name) {
//     clientOrder[name] = clientOrder[name] + 1 || 1;
//     setClientOrder({ ...clientOrder });
//     console.log(clientOrder);
//   }

//   function removeItem(name) {
//     clientOrder[name] = clientOrder[name] - 1;
//     if (clientOrder[name] <= 0) {
//       delete clientOrder[name];
//     }
//     setClientOrder({ ...clientOrder });
//   }

//   const listItems = items[meal].map((e) => <li key={(e.name).replaceAll(" ", "").toLowerCase()} onClick={() => addItem(e.name, e.price)}>
//     <img className="item-img" src={process.env.PUBLIC_URL + e.img} />
//     <div className="item-description">
//       <h4>{e.name}</h4>
//       <p><strong>Precio: ${e.price}</strong></p>

//       {e.type != undefined &&
//         <select
//           key={(e.name).replace(" ", "")}
//           id={(e.name).replace(" ", "").toLowerCase()}
//           value={burgertype}
//           placeholder="res"
//           onChange={(e) => setBurgertype(e.target.value)}
//           onBlur={(e) => setBurgertype(e.target.value)}
//         >
//           <option>Opciones: </option>
//           {e.type.map((types) => (
//             <option key={types} value={types}>{types}</option>
//           ))}
//         </select>
//       }
//     </div>
//   </li >
//   );

//   // const Bill = Object.keys(clientOrder).map((e) => <p key={e}>{e}</p>)



//   return (
//     <div className="add-new-order">
//       <div className="new-order">
//         <div className="new-order-header">
//           <h2> Añadir items: </h2>
//           <form>
//             <label>
//               Cliente:
//             <input id="client-name" type="text" />
//             </label>
//           </form>
//         </div>

//         <button className="button-meal-option" onClick={() => setMeal("breakfast")}>Desayuno</button>
//         <button className="button-meal-option" onClick={() => setMeal("lunch")}>Lunch</button>

//         <ul className="menu-list">{listItems}</ul>
//       </div>

//       <ul className="client-bill">
//         Aquí va: {Object.keys(clientOrder).map((e) => <li key={e}>{e}, cantidad: {clientOrder[e]}<button onClick={() => removeItem(e)}>x</button></li>)}
//       </ul>
//     </div >);
// }

export default NewOrder;