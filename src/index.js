import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routing from "./Components/Router";
import Helper from "./Components/Helper";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div id="main">
      <Routing />
    </div>

    <div id="helper">
      <Helper />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
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
            
            such react`);
