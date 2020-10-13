import React from 'react';

const Bill = (props) => {
  const list = Object.keys(props.order).map((e) => {
    return (
      <li className="black" key={e} >
        {e}, cantidad: {props.order[e].quantity}, total= {props.order[e].quantity * props.order[e].price}
        <button onClick={(() => { props.removeItem(e) })}>x</button>
      </li>
    )
  });

  return (
    <ul>{list}</ul>
  );
}

export default Bill;