import React, {Component} from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
//import { withRouter } from 'react-router-dom'

export default class AddNote extends Component{

	render(){
		return (
			<div className="addNew">
				<textarea type="text" placeholder="Enter your message ..." name="message" className="messageInput"></textarea>
				<div>
					<Button1 onClick={"#"} text="Add" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>

		)
	}
	
}