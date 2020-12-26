import React, { Component } from 'react';
import Button2 from '../dashboardComponents/button2'

export default class SearchedNotes extends Component{
	render(){
		return (
			<React.Fragment>
				<h3 id="records">message</h3>
				<Button2 onClick={()=>this.props.history.goBack()} text="Back to notes" />
			</React.Fragment>
		)
	}
	
}