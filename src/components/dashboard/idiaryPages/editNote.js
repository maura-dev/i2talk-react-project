import React, { Component } from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'

export default class EditNote extends Component{

	render(){
		return (
			<div className="editNew">
				<textarea type="text" name="message" className="messageInput"></textarea>
				<div>
					<Button1 onClick={"#"} text="Add Changes" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>
		)
	}
	
}