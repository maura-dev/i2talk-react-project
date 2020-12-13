import React from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
export default function AddNote(){

	return (
		<div className="addNew">
			<textarea type="text" placeholder="Enter your message" name="message"></textarea>
			<div>
				<Button1 onClick={"#"} text="Add" />
				<Button2 onClick={"#"} text="Cancel" />					
			</div>
		</div>

		)
	
}