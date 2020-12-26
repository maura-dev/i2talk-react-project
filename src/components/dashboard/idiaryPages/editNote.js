import React, { Component } from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import { EditNote } from '../../../actions/idiaryActions';
//import {GetNotes} from '../../../actions/idiaryActions'
import { connect } from 'react-redux';

class EditNotes extends Component{

	state={
		time: "",
		message: "",
		errors:{}
	}

	componentDidMount(){
		//console.log(this.props.editDetails)

		 /*this.setState({
	 		message: message,
		 	errors:{} 
		 });*/
	}	

	onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value,
			errors:{}
		});
		document.getElementById("error").style.display="none"
	}


	submitNote=()=>{

		const { message }= this.state
		//ERROR CHECKING
		if(message===""){
			this.setState({
				errors:{message: "Input a valid note or click cancel"} 
			});
			document.getElementById("error").style.display="inline-block"
			return;
		}

		const {id} = this.props.match.params

		const updNote={
			id,
			message,
			time:"Last edited on " + new Date.toDateString() + "."
		}

		
		this.props.EditNote(updNote)

		//CLEAR DETAILS IN THE FORM INPUT
		this.setState({
			message:"",
			errors:{} 
		});
		this.props.history.push('/dashboard/idiary')
	}

	
	render(){
		
		const {message, errors}= this.state

		return (
			<div className="editNew">
				<p style={{color:'red', textAlign:'center'}}><i id="error" className="fas fa-exclamation-circle"></i> &nbsp;{errors.message}</p>
				<textarea type="text" 
				name="message" 
				className="messageInput"
				value={message}
				onChange= {this.onChange}></textarea>
				<div>
					<Button1 onClick={this.editNote} text="Add Changes" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>
		)
	}
	
}

export default connect(null, { EditNote })(EditNotes)