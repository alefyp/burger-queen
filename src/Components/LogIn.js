import React, { useState } from 'react';
import '../css/Login.css';

const LogIn = () => {
  const [recoverLink, setRecover] = useState("");
  //const [email, setEmail] = useState("");
  return (
    <div className="LogIn">
      <header className="Login-header">
        <h1>Burger Queen!</h1>
      </header>

      <form className="LoginForm">
        <label htmlFor="email">
          Correo electrónico:
            <input
            id="email"
            value={null}
            type="text"
            name="Email"
            placeholder="example@gmail.com"
          //onChange={(e) => setEmail(e.target.value)} 
          />
        </label>
        <label htmlFor="password">
          Contraseña:
            <input
            id="password"
            value={null}
            type="password"
            name="password"
            placeholder="******"
          //onChange={(e) => setEmail(e.target.value)} 
          />

        </label>
        <button>Entrar</button>
      </form>

      <a href={recoverLink}>Olvidé mi contraseña </a>
    </div>

  );
};

export default LogIn;
