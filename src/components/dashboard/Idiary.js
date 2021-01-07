import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headers from './dashboardComponents/headers';
import ChatMenu from './ChatMenu';
import AddNotes from  './idiaryPages/addNote';
import EditNotes from  './idiaryPages/editNote';
import AllNotes from './idiaryPages/allNotes';
import SearchedNotes from './idiaryPages/searchedNotes';

class Idiary extends Component {

  render() {

  	
    return (
    	<Router>
				<div className="chat-container">
          <ChatMenu />

          <div className="chat-message-container" id="user-msg-container">
						<div className="dashboard-feature-container">
							<Headers text="iDiary" />
							
							<Switch>
								<Route exact path="/dashboard/idiary/" component={AllNotes} />
								<Route exact path="/dashboard/idiary/addnote" component={AddNotes} />
								<Route exact path="/dashboard/idiary/editnote/:id" component={EditNotes} />
								<Route exact path="/dashboard/idiary/searchresults" component={SearchedNotes} />               
							</Switch>	
						
						</div>
					</div>
				</div>
	      
			</Router>
    )
  }
}


export default Idiary;