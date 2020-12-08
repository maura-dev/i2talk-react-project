import React, { Component } from 'react';
import Card from '../layout/card';
import HeroBox from '../layout/hero';
import LogInForm from '../forms/LogInForm';
import SignUpForm from '../forms/SignUpForm';
import UserJImg1 from '../../img/user-journey-img1.svg';
import UserJImg2 from '../../img/user-journey-img2.svg';
import UserJImg3 from '../../img/user-journey-img3.svg';
import UserJImg4 from '../../img/user-journey-img4.svg';
import UserJImg5 from '../../img/user-journey-img5.svg';
import '../../App.css';
import '../../styles/main.css'

class Main extends Component {
	state={
		showSignUp : false
	}

	showForm=()=>{
		this.setState({...this.state, showSignUp: true})
		console.log(this.state)
	}

	hideForm=()=>{
        this.setState({...this.state, showSignUp: false})
	}

	render() {
		// const { title, body } = this.props.faqDetail;
		const { showSignUp } = this.state;
		
		return(
			<div>
				<div className="hero">
					<HeroBox showForm={this.showForm}/>
					<LogInForm />
				</div>

				{showSignUp ? <div className="signup-modal">
					<SignUpForm hideForm={this.hideForm}/>
					</div> : null}

				<svg className="one" viewBox="0 0 1443 328" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M1443 200.5C1164.5-26.5 198 578 .5 200.5V0H1443v200.5z" fill="var(--background)" />
				</svg>

				<div className="userjny two">
					<Card 
					source={UserJImg1}
					text="Sign Up"/>
	
					<Card 
					source={UserJImg2}
					text="Enable Location"/>
	
					<Card 
					source={UserJImg3}
					text="Find Friends"/>
	
					<Card 
					source={UserJImg4}
					text="Join ChatRooms"/>
	
					<Card 
					source={UserJImg5}
					text="Connect on the go!"/>
				</div>
			</div>
		)
	}
	
}

export default Main;
// this component contains the contents of the home page or index page