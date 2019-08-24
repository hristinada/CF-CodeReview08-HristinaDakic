import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/nav.css';

function NavigationComponent() {
  return (
    <header className="navigation">
        <h1 className="logo"><NavLink to="/" exact>La Casa</NavLink></h1>
        <ul>
	        <li><NavLink to="/buy" exact activeClassName="active">Buy</NavLink></li>
	        <li><NavLink to="/rent" exact activeClassName="active">Rent</NavLink></li>
	        <li><NavLink to="/sell" exact activeClassName="active">Sell</NavLink></li>
	        <li><NavLink to="/about" exact activeClassName="active">About</NavLink></li>  
          <li><NavLink to="/contact" exact activeClassName="active">Contact</NavLink></li> 
        </ul>
        <button className='loginButton'>Log in</button>
    </header>
  );
}

export default NavigationComponent;
