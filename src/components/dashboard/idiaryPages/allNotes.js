import React, {Component} from 'react';
import Note from '../dashboardComponents/Note'
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {GetNotes} from '../../../actions/idiaryActions';

class AllNotes extends Component{

	state={
		isSearching: false
	}

	componentDidMount(){
		this.props.GetNotes()
	}

	onChange=()=>{
		this.setState({
			isSearching: true
		});

		/*input= document.getElementById("searchInput").value
	
		input=input.toLowerCase()//CONVERTS THE SEARCH INPUT TO LOWER CASE
			//allMessagez = iDairy.filter(x=>x.message.toLowerCase().includes(input))
			document.getElementById("records").style.display="block"
			document.getElementById("back-btn").style.display="block"
			document.getElementById("top").style.display="none"
			document.getElementById("top-heading").style.display="none"
		
			if(allMessagez==null||allMessagez==undefined){
				document.getElementById("records").innerHTML=`<b> No notes found</b>`
			}
			
			else{
				displaySearchedMessages()
				
				if(allMessagez.length==1){
				document.getElementById("records").innerHTML=`<b> 1 note found</b>`
				}
				else{
				document.getElementById("records").innerHTML=`<b>${allMessagez.length} notes found</b>`
				}
			}
				
			})
			});*/
	}

	render(){
		//const {isSearching}= this.state
		const {notes}= this.props
		return (
			<React.Fragment>
				<div className="top">
					<input type="text" 
					name="search" 
					placeholder="Search saved notes" 
					onChange={this.onChange} 
					id="searchInput"
					className="searchInput" 
					/*value={search}*//>
					<Link to="/dashboard/idiary/searchresults"><Button2 text="Search" /></Link>
					<Link to="/dashboard/idiary/addnote"><Button1 text="Add New Note"/></Link>
				</div>

				<h3 id="top-heading">Saved Notes</h3>

				<div id="messages">
					{notes.map(note=>(
						<Note key={note.id} note={note}/>)
					)}
				</div>

		  	</React.Fragment>

		)
	}
	
}

AllNotes.propTypes={
	notes: PropTypes.array.isRequired,
	GetNotes: PropTypes.func.isRequired
}

const mapStateToProps=(state)=>({
	notes:state.notes.notes
})

/*const mapDispatchToProps=(dispatch)=>({
	GetNotes: ()=> dispatch({type:GET_NOTES})
})*/

export default connect(mapStateToProps, { GetNotes })(AllNotes);