import React from 'react';
import {Link} from 'react-router-dom';

import '../../App.css';
import '../../styles/header.css'

function Header() {
	return(
		<header>
			<nav>
				<ul className="menu">
					<li className="logo"><Link to="/">i2Talk</Link></li>
					<li className="item"><Link to="/">Home</Link></li>
					<li className="item"><Link to="/features">Features</Link></li>
					<li className="item nav-button"><Link to="/contact">Contact</Link></li>
					<li className="toggle"><i className="fas fa-bars"></i></li>
				</ul>
			</nav>
   	</header>
	)
	
}

export default Header
//this component contains the header