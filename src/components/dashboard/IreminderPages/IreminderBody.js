import React, { Component } from 'react';
import Reminder from './Reminder';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReminders } from '../../../actions/ireminderActions';
import axios from 'axios';


class IreminderBody extends Component{
	state={
		isLoading:true
	}

	componentDidMount(){
		const accessToken=localStorage.getItem("bearerToken")

		var config = {
			method: 'get',
			url: 'https://i2talk.live/api/ireminder',
			headers: { 
				'Authorization': `Bearer ${accessToken}` 
			}
		};
		console.log(this.props)
		axios(config)
		.then(async (response)=>{
			await this.props.dispatch(getReminders(response.data.data));
			this.setState({
				isLoading: false
			});
		 
		  localStorage.setItem("loggedReminders", JSON.stringify(response.data.data));
		})
		.catch(function (error) {
		 	console.log(error);
		});
		
	}

	render(){
		const { reminders } = this.props;
		const { isLoading } = this.state;
    
		return (
			<React.Fragment>
				<div className="ireminder-body-cont">
					<h3>Reminder List</h3>
					{isLoading ?  (<i className="fa fa-spinner fa-spin" style={{fontSize:"50px",margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}></i>) :
						(<div className="ireminder-body scrollbar" id="ireminder-scroll">
								{reminders.map((reminder) =>
									<Reminder key={reminder.ID} reminder={reminder}/>
								)}
							</div>
						)
					}
		  	</div>
			</React.Fragment>
		)
	}
	
}

IreminderBody.propTypes={
	reminders: PropTypes.array.isRequired,
	getReminders: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reminders: state.reminders
})

export default connect(mapStateToProps)(IreminderBody);