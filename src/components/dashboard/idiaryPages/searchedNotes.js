import React, { Component } from 'react';
import Button2 from '../dashboardComponents/button2'
import axios from 'axios';

export default class SearchedNotes extends Component{

	state={
		searchResults:[],
		number:0,
		isLoading:true
	}

	async componentDidMount(){
		const { search }= this.props.match.params
		const accessToken=localStorage.getItem("bearerToken")

		var config = {
		  method: 'get',
		  url: `https://i2talk.live/api/idairy/search/${search}`,
		  headers: { 
		  	'Authorization': `Bearer ${accessToken}`
		  }
		};

		await axios(config)
		.then(async (response) => {
			const searchresult=response.data.data
		  await this.setState({
		  	searchResults: searchresult,
		  	number:searchresult.length,
		  	isLoading:false

		  });
		  //alert(JSON.stringify(this.state))
		})
		.catch(function (error) {
		  if (error.status==="404"){
		  	document.getElementById("records").innerText="No notes found for search input you entered."
		  }
		  else{
		  	alert(error);
		  }
		});
	}

	render(){

		const { isLoading,searchResults, number } = this.state
		//const {ID, timeCreated,message}= this.state.searchResults
		return (
			<React.Fragment>
				{isLoading ?  
				(<i className="fa fa-spinner fa-spin" 
					style={{fontSize:"50px", margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}>
				</i>) :
				(<React.Fragment>
					<div style={{display:"flex", margin:"20px", flexDirection:"row", justifyContent:"space-between" }}>			
					<h3 id="records">{number} notes found matching your search input</h3>
					<Button2 onClick={()=>this.props.history.goBack()} text="Back to notes" />
					</div>
					<div id="searchResults" className="scrollbar">
						{searchResults.map(note=>(

							 <div className="ireminder-item" key={note.ID}>
						        <div className="ireminder-head">
						          <p>{note.timeCreated}</p>
						        </div>
						        <div className="ireminder-msg">
						          <p> {note.message} </p>
						        </div>
						     </div>)
						)}
					</div>

				</React.Fragment>)}
			</React.Fragment>
		)
	}
	
}