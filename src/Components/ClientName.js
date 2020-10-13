import React from 'react';

const ClientName = (props) => {
  return (
    <form className="client-name-form">
      <label>
        Cliente:
        <input
          type="text" required
          name="name"
          placeholder="Juanito uwu" />

      </label>
      <label>
        Comentarios:
        <input
          type="text"
          name="comentarios"
          placeholder="La hamburguesa sin cebolla!" />
      </label>
      <input className="send-client" type="submit" value=">" />
    </form>
  );
}

export default ClientName;