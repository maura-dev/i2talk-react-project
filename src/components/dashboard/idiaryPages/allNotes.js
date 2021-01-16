import React, {Component} from 'react';
import Note from '../dashboardComponents/Note'
import Button1 from '../dashboardComponents/button1'
///import { Redirect } from 'react-router-dom'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {GetNotes} from '../../../actions/idiaryActions'
import axios from 'axios'

class AllNotes extends Component{
	state={
		isLoading:true,
		isSearching: false,
		search:""
	}

	componentDidMount(){
		const accessToken=localStorage.getItem("bearerToken")

		var config = {
			method: 'get',
			url: 'https://i2talk.live/api/idairy',
			headers: { 
				'Authorization': `Bearer ${accessToken}` 
			}
		};

		axios(config)
		.then(async (response)=>{
			await this.props.dispatch(GetNotes(response.data.data))
			this.setState({
				isLoading: false
			});

		 
		  localStorage.setItem("loggedUserDiary", JSON.stringify(response.data.data));
		})
		.catch(function (error) {
		 	alert(error);
		});
		
	}

	onChange=(e)=>{
		
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	handleClick=()=>{
		this.setState({
			isSearching: true
		});
	}

	render(){
			const { isLoading, search } = this.state

			if (this.state.isSearching) {
				return <Redirect to={`/dashboard/idiary/searchresults/${search}`} />
			}
		return (
			<React.Fragment>

				<div className="top">
					<input type="text" 
					name="search" 
					placeholder="Search saved notes" 
					onChange={this.onChange} 
					id="searchInput"
					className="searchInput" 
					value={search}/>
					<Button1 text="Search" onClick={this.handleClick}/>

				</div>
				<br />
				<hr />
				<Link to="/dashboard/idiary/addnote"><button className="shake" id="add-btn">
						<i className="fas fa-plus-circle"></i>
					</button>
				</Link>
	                
	      <h3 id="top-heading">Saved Notes</h3>

				{isLoading ?  (<i className="fa fa-spinner fa-spin" style={{fontSize:"50px",margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}></i>) :
				(<div id="messages" className="scrollbar">
					{this.props.notes.map(note=>(
						<Note key={note.ID} note={note}/>)
					)}
				</div>)}
			</React.Fragment>
		)
	}
	
}

AllNotes.propTypes={
	notes: PropTypes.array.isRequired,
	GetNotes: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
	notes:state.notes
})

export default connect(mapStateToProps)(AllNotes);