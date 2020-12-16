import React, {Component} from 'react';
import Button1 from '../dashboardComponents/button1';
import Button2 from '../dashboardComponents/button2';
import { AddNote } from '../../../actions/idiaryActions';
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom'

class AddNotes extends Component{
	state={
		message: "",
		errors:{}
	}

	submitNote=(newNote)=>{
		const { message }= this.state
		//ERROR CHECKING
		if(message===""){
			this.setState({
				errors:{message: "Input a valid note or click cancel"} 
			});
			return;
		}

		//NEW NOTE OBJECT
		newNote={
			id: new Date(),
			message: message,
			time: new Date().toLocaleString()
		}

		this.props.AddNote(newNote)

		//CLEAR DETAILS IN THE FORM INPUT
		this.setState({
			message:"",
			errors:{} 
		});
		this.props.history.push('/dashboard/idiary')
	}

	onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render(){
		const {message, errors}= this.state
		//const{newNote}
		return (
			<div className="addNew">
				<p style={{color:'red', textAlign:'center'}}>{errors.message}</p>}
				<textarea type="text" 
				placeholder="Enter your new note ..." 
				name="message" 
				className="messageInput"
				onChange={this.onChange}
				value={message} ></textarea>
				<div>
					<Button1 onClick={this.submitNote} text="Add" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>

		)
	}
	
}

export default connect(null, { AddNote })(AddNotes)