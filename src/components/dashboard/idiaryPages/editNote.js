import React from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
export default function EditNote(){

	return (
		<div id="editNew">
			<textarea type="text" placeholder="" name="message" id="editMessageInput"></textarea>
			<div>
				<Button1 onClick={"#"} text="Add Changes" />
				<Button2 onClick={"#"} text="Cancel" />					
			</div>
		</div>
	)
	
}