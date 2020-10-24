import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Components/Router';
import Title from './Components/Title';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Title text="Para una mejor experiencia, te recomendamos usar tu dispositivo en horizontal owo" color="black" />
  </React.StrictMode>,
  document.getElementById('portrait')
);

serviceWorker.register();



console.log(`
            ▄              ▄    
    wow     ▌▒█           ▄▀▒▌   
            ▌▒▒█        ▄▀▒▒▒▐   
          ▐▄█▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐   
        ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐   
      ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌   
      ▐▒▒▒▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▌  
      ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐  
    ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌ 
    ▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
    ▌▒▒▒▄██▄▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▐   much code
    ▐▒▒▐▄█▄█▌▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
    ▐▒▒▐▀▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▐ 
    ▌▒▒▀▄▄▄▄▄▄▀▒▒▒▒▒▒▒░▒░▒░▒▒▒▌ 
    ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▒▐  
      ▀▄▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌  
        ▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀   
          ▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀     
            ▀▀▀▀▀▀▀▀▀▀▀▀        
            
            such react`)
