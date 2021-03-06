import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light header">
		  <NavLink activeclassname="active" className="navbar-brand" to="/">FirstApp</NavLink>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavDropdown">
		    <ul className="navbar-nav">
		      <li className="nav-item active">
		        <NavLink activeclassname="active" className="nav-link" to="/">Home</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink activeclassname="active" className="nav-link" to="about">About</NavLink>
		      </li>
		      <li className="nav-item">
		        <NavLink activeclassname="active" className="nav-link" to="contact">Contact</NavLink>
		      </li>
		    </ul>
		  </div>
		</nav>
	);
}

export default Header