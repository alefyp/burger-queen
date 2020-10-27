import React from 'react';
import styles from '../css/ItemList.module.css';

const List = (props) => {

  //todo iba muy bien hasta que me acordé que se me olvidó poner las clases de hamburguesas XD y ahora pues
  //tremendos cambios XD

  const list = [];


  Object.keys(props.items).forEach((e) => {
    if (props.items[e].menu.includes(props.meal)) {

      // if (Array.isArray(props.items[e].class)) {

      //   const classList = props.items[e].class.map((type, index) => {
      //     return (
      //       <option key={type} value="type" onClick={(() => { props.addItem(props.items[e].name, props.items[e].price) })} >{type}</option>
      //     );
      //   });

      //   console.log(classList);

      //   list.push(
      //     <li className="black list-items" key={props.items[e].id}>
      //       <img className="img-item-order" src={process.env.PUBLIC_URL + props.items[e].img} alt={props.items[e].name} />
      //       <div className="list-items-description-container">
      //         <h4 className="list-items-name">{props.items[e].name}</h4>
      //         <p className="list-items-price">Precio: ${props.items[e].price} </p>
      //         <p className="list-items-type"><span>{props.items[e].type[0]}</span></p>
      //         <select><option selected value=""> Escoge el tipo</option>{classList}</select>
      //       </div>
      //     </li>
      //   )



      // } else {
      list.push(
        <li className={styles.li} key={props.items[e].id} onClick={(() => { props.addItem(props.items[e].name, props.items[e].price) })}>
          <img src={process.env.PUBLIC_URL + props.items[e].img} alt={props.items[e].name} />
          <div className={styles.description}>
            <p className="list-items-name">{props.items[e].name}</p>
            <p className="list-items-price">Precio: ${props.items[e].price} </p>
            {/* <p className={styles.sub}><span>{props.items[e].type[0]}</span></p> */}
          </div>
        </li>)
    }
  });

  //Creo que le puedo poner un condicional al botón if(props.class[e] exists){open modal y luego add Item}
  return (
    <ul className={styles.ul}>{list}</ul>
  );
}

export default List;