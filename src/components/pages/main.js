import React, { Component } from 'react';

// import page components
import Header from '../layout/header'
import Footer from '../layout/footer'
import Card from '../layout/card';
import HeroBox from '../layout/hero';
import LogInForm from '../forms/LogInForm';
import SignUpForm from '../forms/SignUpForm';

// import component images
import UserJImg1 from '../../img/user-journey-img1.svg';
import UserJImg2 from '../../img/user-journey-img2.svg';
import UserJImg3 from '../../img/user-journey-img3.svg';
import UserJImg4 from '../../img/user-journey-img4.svg';
import UserJImg5 from '../../img/user-journey-img5.svg';
import Divider from '../../img/divider.svg';

// import component styling
import '../../App.css';
import '../../styles/main.css'

class Main extends Component {
	state = {
		showSignUp: false
	};

	render() {
		const { showSignUp } = this.state;

		return(
			<div>
        <Header />

				<div>
					<div className="hero">
						<HeroBox />
						<LogInForm />
					</div>

					<div className="signup-modal">
						{showSignUp ? (<div className="hero-modal-form"><SignUpForm /></div>) : null}
						
						<div className="close-icon">
							<i onClick = {()=>
							this.setState({ showSignUp: !this.state.showSignUp })
						} className="fas fa-times"></i>
						</div>
					</div>

					<div className="one">
						<img src={Divider} alt="" />
					</div>
					
					<div className="two user-j">
						<h3>Get Started...</h3>
						<div className="userjny">
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
				</div>

        <Footer />
      </div>
		
		)
	}
	
}

export default Main;
// this component contains the contents of the home page or index page