import React, {Component} from 'react';
import Button1 from '../dashboardComponents/button1';
import Button2 from '../dashboardComponents/button2';
import { AddNote } from '../../../actions/idiaryActions';
import { connect } from 'react-redux';
import TextInput from "../dashboardComponents/textArea"; 
import swal from '@sweetalert/with-react';
import axios from 'axios';

class AddNotes extends Component{
	state={
		message: "",
		errors:{}
	}

	submitNote=(newNote)=>{
		const accessToken=localStorage.getItem("bearerToken");
		const { message }= this.state;
		//ERROR CHECKING
		if(message===""){
			this.setState({
				errors:{message: "Input a valid note or click cancel"} 
			});
			document.getElementById("error").style.display="inline-block"
			return;
		}

		//NEW NOTE OBJECT
		newNote={
			"message": message
		}

		var config = {
		  method: 'post',
		  url: 'https://i2talk.live/api/idairy/add',
		  headers: {
		  	'Authorization': `Bearer ${accessToken}` 
		  },
		  data : newNote
		};

		axios(config)
		.then(async(response) => {
			this.props.AddNote(newNote)

			//CLEAR DETAILS IN THE FORM INPUT
			this.setState({
				message:"",
				errors:{} 
			});
			await swal("Yay!", "Your new note is noted.", "success");
			this.props.history.push('/dashboard/idiary')
		  	console.log(JSON.stringify(response.data));
		})
		.catch((error) => {
			if(error.status==="404"){
		  		alert("your diary is empty")
		  	}else{
		  		alert(error);
		 	}

		});
	}

	onChange=(e)=>{

	    var autoExpand = function (field) {

	    // Reset field height
	    field.style.height = 'inherit';

	    // Calculate the height
	    var height = field.scrollHeight + 5
	                 
	    field.style.height = height + 'px';

	    };

	    document.addEventListener('input', function (event) {
	      if (event.target.tagName.toLowerCase() !== 'textarea') return;
	      autoExpand(event.target);
	    }, false);
		 

		this.setState({
			[e.target.name]: e.target.value,
			errors:{}
		});
		document.getElementById("error").style.display="none"
	}

	render(){
		const {message, errors}= this.state
		//const{newNote}
		return (
			<div className="addNew">
				<p style={{color:'red', textAlign:'center'}}><i id="error" className="fas fa-exclamation-circle"></i> &nbsp;{errors.message}</p>
				<TextInput 
				placeholder="Enter your new note ..." 
				name="message" 
				className="messageInput textScrollbar"
				onChange={this.onChange}
				value={message} />
				
				<div>
					<Button1 onClick={this.submitNote} text="Add" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>

		)
	}
	
}

export default connect(null, { AddNote })(AddNotes);