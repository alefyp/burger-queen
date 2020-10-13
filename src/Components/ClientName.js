import React from 'react';

const ClientName = (props) => {
  return (
    <form className="client-name-form">
      <label>
        Cliente:
        <input
          type="text"
          name="name"
          placeholder={props.ClientName} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default ClientName;