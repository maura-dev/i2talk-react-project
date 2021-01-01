import React from 'react'; 
import '../../App.css'


export default function Card2({type, name, text}) {

	return(
		<div className="feature-items" id={name}>

            <br/><i className={type}></i><br/>
             <h4>{name}</h4>
             <br/>
            <p>{text}</p>
                
        </div>
	)
}

//this component serves as a container for the card used in the about/features page