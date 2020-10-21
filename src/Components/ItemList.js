import React from 'react';

const List = (props) => {

  const list = [];
  Object.keys(props.items).forEach((e) => {
    if (props.items[e].menu.includes(props.meal)) {
      list.push(
        <li className="black list-items" key={props.items[e].id} onClick={(() => { props.addItem(props.items[e].name, props.items[e].price) })}>
          <img className="img-item-order" src={process.env.PUBLIC_URL + props.items[e].img} alt={props.items[e].name} />
          <div className="list-items-description-container">
            <h4 className="list-items-name">{props.items[e].name}</h4>
            <p className="list-items-price">Precio: ${props.items[e].price} </p>
            {/* <p className="list-items-type"><span>{props.items[e].type[0]}</span></p> */}
          </div>
        </li>)
    }
  });

  //Creo que le puedo poner un condicional al botón if(props.class[e] exists){open modal y luego add Item}
  return (
    <ul className="list-items-container">{list}</ul>
  );
}

export default List;