import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Input from '../Components/Input';
import Button from '../Components/Button';
import styles from '../css/Login.module.css';

const LogIn = () => {

  let history = useHistory();

  function checkAuthentication(event) {
    event.preventDefault();
    console.log('soy un usuario: ', name);
    history.push("/rol");
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className={styles.login}>
      <header className="Login-header">
        <h1>Burger Queen!</h1>
      </header>

      <form onSubmit={checkAuthentication}>
        <Input name={name} label="Nombre:" type="text" placeholder="Alefy" handler={setName} />
        <Input name={email} label="Correo electrónico" type="email" placeholder="example@example.com" handler={setEmail} />
        <Input name={password} label="Contraseña:" type="password" placeholder="*****" handler={setPassword} />
        <Button type="submit" text="Entrar" />
      </form>
    </div>

  );
};

export default LogIn;

//separar más
