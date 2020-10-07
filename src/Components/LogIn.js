import React, { useState } from 'react';
import '../css/Login.css';

import { useHistory } from "react-router-dom";


const LogIn = () => {

  let history = useHistory();

  //Aquí voy a hacer mi función de autorización
  function checkAuthentication(event) {
    event.preventDefault();
    //stop the form from submitting

    //get the mail and password
    history.push("/rol");
  }

  const [recoverLink, setRecover] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="LogIn">
      <header className="Login-header">
        <h1>Burger Queen!</h1>
      </header>

      <form className="LoginForm" onSubmit={checkAuthentication}>
        <label htmlFor="email">
          Correo electrónico:
            <input
            id="email"
            value={email}
            type="text"
            name="Email"
            autoComplete="username"
            placeholder="example@gmail.com"

            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Contraseña:
            <input
            id="password"
            value={password}
            type="password"
            name="password"
            placeholder="******"
            required
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

        </label>
        <button type="submit">Entrar</button>
      </form>
      <a href={recoverLink}>Olvidé mi contraseña </a>
    </div>

  );
};

export default LogIn;
