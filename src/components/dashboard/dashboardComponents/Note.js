import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { DeleteNote } from '../../../actions/idiaryActions';
import EditNotes from  '../idiaryPages/editNote'

class Note extends Component{

	deleteNote= (id) =>{
		this.props.DeleteNote(id)
	}

	render(){
	
	const{ id, time, message}= this.props.note	
		return( 

	  		<div id="messageContainer">
				<sup>{time}</sup><br/>
				<p>{message}{/* <i className="fas fa-ellipsis-h"></i>*/}</p>
				<div id="buttons">
					<Link to={`/idiary/editNote/${id}`}>
						<span style={{fontSize:"20px", color:"var(--primary-color)"}} align="right">
							<i className="far fa-edit icon"></i>
						</span>
					</Link>
					
					<span style={{fontSize:"20px", color: "var(--primary-color)"}} onClick={this.deleteNote.bind(this,id)}>
						<i className="far fa-trash-alt icon"></i>
					</span>
				</div>
			</div>
		)
	}
	
}

export default connect(null, {DeleteNote})(Note)