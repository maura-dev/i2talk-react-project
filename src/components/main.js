import React from 'react' 
import Card from './indexComponents/card'
import HeroBox from './indexComponents/hero'
import '../App.css'

function Main() {

	return(
		<div>
			<HeroBox/>
			<div className="userjny">
				<Card 
				source="./assets/img/user-journey-img1.svg"
				text="Sign Up"/>

				<Card 
				source="./assets/img/user-journey-img2.svg"
				text="Enable Location"/>

				<Card 
				source="./assets/img/user-journey-img3.svg"
				text="Find Friends"/>

				<Card 
				source="./assets/img/user-journey-img4.svg"
				text="Join ChatRooms"/>

				<Card 
				source="./assets/img/user-journey-img5.svg"
				text="Connect on the go!"/>
			</div>
		</div>
	)
	
}

export default Main
// this component contains the contents of the home page or index page