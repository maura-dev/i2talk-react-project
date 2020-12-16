import React, {Component} from 'react';
import Note from '../dashboardComponents/Note'
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import DashboardInput from '../dashboardComponents/dashboardInput'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {GetNotes} from '../../../actions/idiaryActions'

class AllNotes extends Component{

	componentDidMount(){
		this.props.GetNotes()
	}

	render(){
		const {notes}= this.props
		return (
			<React.Fragment>
				<div className="top">
					<DashboardInput name="search" placeholder="Search saved notes" onChange={"#"} /*value={search}*/ />
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

export default connect(mapStateToProps, { GetNotes })(AllNotes)