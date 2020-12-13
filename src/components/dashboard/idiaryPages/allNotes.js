import React from 'react';
import Button1 from '../dashboardComponents/button1'
import Button2 from '../dashboardComponents/button2'
import DashboardInput from '../dashboardComponents/dashboardInput'
export default function AllNotes(){

	return (
		<React.Fragment>
			<div className="top">
				<DashboardInput name="search" placeholder="Search saved notes" onChange={"#"} /*value={search}*/ />
				<Button2 onClick={"#"} text="Search" />
				<Button1 onClick={"#"} text="Add New Note"/> 
			</div>

			<h3 id="top-heading">Saved Notes</h3>

		  	<div id="messages">
		  		<div id="messageContainer">
					<sup>time</sup><br/>
					<p>message</p>
					<div id="buttons">
						<span style={{fontSize:"20px", color:"var(--primary-color)"}} id="edit-icon" onClick={"#"} align="right">
							<i className="far fa-edit"></i>
						</span>

						<span style={{fontSize:"20px", color: "var(--primary-color)"}} id="delete-icon" onClick={"#"}>
							<i className="far fa-trash-alt"></i>
						</span>
					</div>
				</div>
			</div>
	  	</React.Fragment>

		)
	
}