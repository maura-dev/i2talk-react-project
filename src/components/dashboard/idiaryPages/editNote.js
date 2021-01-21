import React, { Component } from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import { EditNote } from '../../../actions/idiaryActions';
import TextInput from "../dashboardComponents/textArea"; 
import { connect } from 'react-redux';
import axios from 'axios'
import swal from '@sweetalert/with-react';

class EditNotes extends Component{

	state={
		message:"" ,
		errors:{}
	}

	componentDidMount(){
		const accessToken=localStorage.getItem("bearerToken")
		const {ID} = this.props.match.params
		var config = {
		  method: 'get',
		  url: `https://i2talk.live/api/idairy/${ID}`,
		  headers: {
		  	'Authorization': `Bearer ${accessToken}`
		   }
		};

		axios(config)
		.then(async (response)=> {
		  await console.log(response.data.data)
		  //localStorage.setItem("currentDiary", response.data.data)
		  const currentDiary=response.data.data;
		  this.setState({
		  	...this.state,
		  	message: currentDiary[0].message,
		  	errors:{}
		  });
		})
		.catch(function (error) {
		  alert(error);
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

	editNote=()=>{
		const accessToken=localStorage.getItem("bearerToken")
		const { message }= this.state
		//ERROR CHECKING
		if(message===""){
			this.setState({
				errors:{message: "Input a valid note or click cancel"} 
			});
			document.getElementById("error").style.display="inline-block"
			return;
		}

		const {ID} = this.props.match.params
		const updNote={
			"message":message
		}

		var config = {
		  method: 'put',
		  url: `https://i2talk.live/api/idairy/edit/${ID}`,
		  headers: { 
		  	'Authorization': `Bearer ${accessToken}` 
		  },
		  data : updNote
		};

		axios(config)
		.then(async (response)=> {
			//const editedDiary=localStorage.getItem("currentDiary")
			const updtNote= response.data.data
			const editedNote= updtNote[0]
			this.props.EditNote(editedNote)
			this.props.history.push('/dashboard/idiary')
			await swal("Yay!", "Your note has successfully been edited.", "success");
		})
		.catch(function (error) {
		  alert(error);
		});

	}

	
	render(){
		
		const {message, errors}= this.state

		return (
			<div className="editNew">
				<p style={{color:'red', textAlign:'center'}}><i id="error" className="fas fa-exclamation-circle"></i> &nbsp;{errors.message}</p>
				
				<TextInput 
				placeholder="Enter your new note ..." 
				name="message" 
				className="messageInput textScrollbar"
				onChange={this.onChange}
				value={message} />
				<div>
					<Button1 onClick={this.editNote} text="Add Changes" />
					<Button2 onClick={()=>this.props.history.goBack()} text="Cancel" />					
				</div>
			</div>
		)
	}
	
}

export default connect(null, { EditNote })(EditNotes)