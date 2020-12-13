import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'
import AddNote from  './idiaryPages/addNote'
import EditNote from  './idiaryPages/editNote'
import AllNotes from './idiaryPages/allNotes'
import SearchedNotes from './idiaryPages/searchedNotes'

class Idiary extends Component {

	state={
		notes:{time: new Date().toLocaleString(),
				message:"My name is Maureen, I live in Lagos"
			},
		showAddNewForm : false,
		showEditForm: false,
		showSearchedNotes: false,
		showAllMessages:true
	}

  render() {
  	const{ time,message }= this.state.notes
  	const{ showSearchedNotes,showEditForm, showAddNewForm, showAllMessages}= this.state
    return (
      	<div className="dashboard-feature-container">

			<Headers text="iDiary" />

			{showAllMessages ? <AllNotes />: null}

			{showAddNewForm ? <AddNote /> : null}

			{showEditForm ? <EditNote /> : null}

			{showSearchedNotes ? <SearchedNotes />: null}		
			
		</div>
    )
  }
}


export default Idiary;