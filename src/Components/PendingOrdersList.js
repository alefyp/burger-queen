import React from 'react';

const PendingOrdersList = (props) => {

  const orderData = props.orderApi.map((order) => {
    console.log(order)
    return (
      <li className="black" key={order.doc}>
        <p>Cliente:{order.cliente}</p>
        <p>{order.comments}</p>
        {
          order.order.map((subitem, index) => {
            return (
              <div key={index}>
                <p >{subitem.item}, {subitem.cantidad}</p>
              </div>
            )
          })
        }
        <p>Seg: {order.hora._seconds} Nanoseg:{order.hora._nanoseconds}  Es más fácil restar en unix</p>
        <button>Terminado</button>

        {/* aquí mandarle order.doc al botón */}
      </li>
    );
  });

  return (
    <ul>{orderData}</ul>
  );
}

export default PendingOrdersList;