import React, { useState } from 'react';
import '../css/Login.css';
import { useHistory } from "react-router-dom";
import Input from '../Components/Input';

const LogIn = () => {

  let history = useHistory();

  function checkAuthentication(event) {
    event.preventDefault();
    //stop the form from submitting
    console.log('soy un usuario: ', name);
    //get the mail and password
    //I guess the auth function starts here lol 

    history.push("/rol");
  }

  const recoverLink = ""; //cuando haga auth
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="LogIn">
      <header className="Login-header">
        <h1>Burger Queen!</h1>
      </header>

      <form className="LoginForm" onSubmit={checkAuthentication}>
        <Input name={name} label="Nombre:" type="text" placeholder="Alefy" handler={setName} />
        <Input name={email} label="Correo electrónico" type="email" placeholder="example@example.com" handler={setEmail} />
        <Input name={password} label="Contraseña:" type="password" placeholder="*****" handler={setPassword} />
        <button type="submit">Entrar</button>
      </form>
      <a href={recoverLink}>Olvidé mi contraseña </a>
    </div>

  );
};

export default LogIn;

//separar más
