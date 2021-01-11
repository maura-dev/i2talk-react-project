import React, { Component } from 'react';
import Reminder from './Reminder';
// import Button1 from '../dashboardComponents/button1';
// import Button2 from '../dashboardComponents/button2';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReminder } from '../../../actions/ireminderActions'


class IreminderBody extends Component{

	componentDidMount(){
		this.props.getReminder()
	}

	render(){
    const { reminders } = this.props;
    
		return (
			<React.Fragment>
				<div className="ireminder-body">
					<h3>Reminder List</h3>
					{reminders.map(reminder =>
						<Reminder key={reminder.id} reminder={reminder} showEdit={this.props.showEdit}/>
					)}
		  	</div>
			</React.Fragment>
			

		)
	}
	
}

IreminderBody.propTypes={
	reminders: PropTypes.array.isRequired,
	getReminder: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	reminders: state.reminders.reminders
})

export default connect(mapStateToProps, { getReminder })(IreminderBody);