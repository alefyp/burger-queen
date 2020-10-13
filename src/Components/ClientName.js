import React from 'react';

const ClientName = (props) => {
  return (
    <form className="client-name-form">
      <label>
        Cliente:
        <input
          type="text"
          name="name"
          placeholder="Juanito uwu" />
      </label>
      <input className="send-client" type="submit" value=">" />
    </form>
  );
}

export default ClientName;