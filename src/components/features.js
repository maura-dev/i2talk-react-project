import React from 'react' 
import Card2 from './indexComponents/card2'
import '../App.css'
import {Link} from 'react-router-dom'

export default function Feature() {
	return (
		<div className="main-content">

            <h3>With i2Talk, enjoy these amazing features ...</h3>
    
            <div  className="feature-items-container">
            	<Card2 type="fas fa-book fa-1x" name="iDiary" text="Save important notes. Store important messages. Be up-to-date"/>
            	<Card2 type="fas fa-search fa-1x" name="iSearch" text="Looking for new friends? Hoping to meet new people? Find other users in your location"/>
            	<Card2 type="fas fa-business-time fa-1x" name="iReminder" text="Trying to remember a lot of things at once? Do you need a reminder which notifies you of upcoming events? Get notified"/>
            	<Card2 type="fas fa-comment-alt fa-1x" name="iSchedule" text="Do you want to schedule messages to be sent later? Communicate scheduled messages at later dates with no internet connection"/>
            </div>

             <div className="all-feature-btns">
                <button className="hero-btn1">Sign up</button>
                <Link to="/"><button className="hero-btn2">Log in</button></Link>
                {/*<button className="feature-btn" onClick={location.assign('/')}>Log in</button>*/}
            </div>
        </div>
	);
}

//this component contains the content of the about page or features page