import React, { useState } from 'react';
import '../css/Login.css';

import { useHistory } from "react-router-dom";

class LogIn extends React.Component {
  checkAuthentication = (event) => {
    event.preventDefault();
    console.log("Un empleado entrando wiowiowio");
  }
  render() {
    return (
      <div className="LogIn">
        <header className="Login-header">
          <h1>Burger Queen!</h1>
        </header>

        <form className="LoginForm" onSubmit={this.checkAuthentication}>
          <label htmlFor="email">
            Correo electrónico:
            <input
              id="email"
              type="text"
              name="Email"
              autoComplete="username"
              placeholder="example@gmail.com"
              required
            />
          </label>
          <label htmlFor="password">
            Contraseña:
            <input
              id="password"
              type="password"
              name="password"
              placeholder="******"
              required
              autoComplete="current-password"
            />

          </label>
          <button type="submit">Entrar</button>
        </form>
        <a href="">Olvidé mi contraseña </a>
      </div>
    );
  }
}


// const LogIn = () => {

//   let history = useHistory();

//   //Aquí voy a hacer mi función de autorización
//   function checkAuthentication(event) {
//     event.preventDefault();
//     //stop the form from submitting
//     console.log('soy un usuario')
//     //get the mail and password
//     history.push("/rol");
//   }

//   const [recoverLink, setRecover] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   return (
//     <div className="LogIn">
//       <header className="Login-header">
//         <h1>Burger Queen!</h1>
//       </header>

//       <form className="LoginForm" onSubmit={checkAuthentication}>
//         <label htmlFor="email">
//           Correo electrónico:
//             <input
//             id="email"
//             value={email}
//             type="text"
//             name="Email"
//             autoComplete="username"
//             placeholder="example@gmail.com"

//             required
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <label htmlFor="password">
//           Contraseña:
//             <input
//             id="password"
//             value={password}
//             type="password"
//             name="password"
//             placeholder="******"
//             required
//             autoComplete="current-password"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//         </label>
//         <button type="submit">Entrar</button>
//       </form>
//       <a href={recoverLink}>Olvidé mi contraseña </a>
//     </div>

//   );
// };

export default LogIn;
