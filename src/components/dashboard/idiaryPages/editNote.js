import React, { Component } from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import { EditNote } from '../../../actions/idiaryActions';
import { connect } from 'react-redux';

class EditNotes extends Component{
	/*editedNote=notes.filter(note=>note.id===)

	state={
		message: ,
		errors:{}
	}

	editedNote={
			id: new Date(),
			message: message,
			time: new Date().toLocaleString()
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
	}*/
	render(){

		/*const {message, errors}= this.state*/
		return (
			<div className="editNew">
				{/*<p style={{color:'red', textAlign:'center'}}>{errors.message}</p>*/}
				<textarea type="text" 
				name="message" 
				className="messageInput"></textarea>
				<div>
					<Button1 onClick={this.editNote} text="Add Changes" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>
		)
	}
	
}

export default connect(null, { EditNote })(EditNotes)