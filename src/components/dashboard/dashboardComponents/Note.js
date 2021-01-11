import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DeleteNote } from '../../../actions/idiaryActions';
//import EditNotes from  '../idiaryPages/editNote'
import axios from 'axios'
import swal from '@sweetalert/with-react';

class Note extends Component{

		deleteNote= (ID) =>{
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this note!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})

		.then((willDelete) => {
			if (willDelete) {

				const accessToken=localStorage.getItem("bearerToken")
				var config = {
				  method: 'delete',
				  url: `https://i2talk.live/api/idairy/delete/${ID}`,
				  headers: { 
				  	'Authorization': `Bearer ${accessToken}`
				  }
				};

				axios(config)
				.then(async (response)=> {
					await this.props.DeleteNote(ID)
					swal(" This note has been deleted!", {
						icon: "success",
					});
					
				  	console.log(JSON.stringify(response.data));
				})
				.catch(function (error) {
				  alert(error);
				});
			} else{

				swal("This note is safe!");
			}

		})
	}

	render(){
		//const loggedUserDiary= localStorage.getItem("loggedUserDiary")
	
		const{ ID, timeCreated, message}= this.props.note	
		return( 

			 <div className="ireminder-item">
		        <div className="ireminder-head">
		          <p>{timeCreated}</p>
		          <Link to={`/dashboard/idiary/editnote/${ID}`}><i className="far fa-pen edit"></i></Link>
		          <i className="far fa-trash-alt delete"  onClick={this.deleteNote.bind(this,ID)}></i>
		        </div>
		        <div className="ireminder-msg">
		          <p> {message} </p>
		        </div>
		     </div>

		)
	}
	
}



export default connect(null, {DeleteNote})(Note)