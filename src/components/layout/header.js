import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from './logo.png'
import '../../App.css';
import '../../styles/header.css'
var logoStyle = {
	width: "30px",
	height: "30px",
};

var logoStyles = {
	display: "flex",
	width: "100px",
	alignItems: "space-between"
};

class Header extends Component {

	state={
		viewNavContent: false
	}

	showNavCont=()=>{
		this.setState({
			viewNavContent: true
		});
		//document.getElementsByClassName("item").style.display="block"
		var x = document.getElementsByClassName("item");
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].style.display = "block";
		}
	}

	hideNavCont=()=>{
		this.setState({
			viewNavContent: false 
		});
		//document.getElementsByClassName("item").style.display="none"
		var x = document.getElementsByClassName("item");
		var i;
		for (i = 0; i < x.length; i++) {
  		x[i].style.display = "none";
		}
	}
	
	render(){
		const {viewNavContent} = this.state
		return(
			<header>
				<nav>
					<ul className="menu">
						<li className="logo">
							<Link to="/">
								<div style={logoStyles}>
								<img src={Logo} alt="" style={logoStyle} />
								<h4>&nbsp;&nbsp;i2talk</h4>
								</div>
							</Link>
						</li>
						<li className="item"><Link to="/">Home</Link></li>
						<li className="item"><Link to="/features">Features</Link></li>
						<li className="item nav-button"><Link to="/contact">Contact</Link></li>
						<li className="toggle">
							{viewNavContent ? <i onClick = {this.hideNavCont} className="fas fa-times"></i> : <i onClick={this.showNavCont} className="fas fa-bars"></i>}
						</li>
					</ul>
				</nav>
	   		</header>
		)
	}
	
}

export default Header
//this component contains the header