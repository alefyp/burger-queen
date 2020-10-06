import React from 'react';
import '../css/Home.css';
import LogIn from './LogIn';
import hamburger from '../media/employee-burger.jpg'

const Home = () => {
  return (
    <div className="Home-view">
      <div className="Hamburger">
        <img src={hamburger} alt="Employee with a burger" />
      </div>
      <LogIn />
    </div>
  );
}

export default Home;
