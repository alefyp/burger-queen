import React from 'react';


const List = (props) => {

  const list = [];

  console.log(props.items)
  Object.keys(props.items).forEach((e) => {
    if (props.items[e].menu.includes(props.meal)) {
      list.push(
        <li className="black" key={props.items[e].id} onClick={(() => { props.addItem(props.items[e].name, props.items[e].price) })}>
          <p>Item: {props.items[e].name}</p>
          <p>Precio: ${props.items[e].price} </p>
          <img src={process.env.PUBLIC_URL + props.items[e].img} />
        </li>)
    }
  });


  return (
    <ul>{list}</ul>
  );
}

export default List;