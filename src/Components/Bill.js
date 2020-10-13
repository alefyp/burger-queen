import React from 'react';

const Bill = (props) => {

  console.log(props.order)


  const list = Object.keys(props.order).map((e) => {
    return (
      <li className="black" key={e}>{e}, cantidad: {props.order[e]}, total= {2}</li>
    )
  });

  return (
    <ul>{list}</ul>
  );
}

export default Bill;