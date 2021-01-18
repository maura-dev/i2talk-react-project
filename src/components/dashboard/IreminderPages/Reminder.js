import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteReminder } from '../../../actions/ireminderActions';

class Reminder extends Component{

  onDeleteClick = ID => {
    this.props.deleteReminder(ID)
  }

	render(){
	  const { ID, timeCompleted, message } = this.props.reminder;
    
    return(
      <React.Fragment>
        <div className="ireminder-item">
          <div className="ireminder-head">
            <p>{timeCompleted}</p>
            <Link to={`/dashboard/ireminder/editForm/${ID}`}>
              <i className="far fa-pen edit"></i>
            </Link>
            <i className="far fa-trash-alt delete" onClick={this.onDeleteClick.bind(this, ID)}></i>
          </div>
          <div className="ireminder-msg">
            <p> {message} </p>
          </div>
        </div>
      </React.Fragment>
		)
	}
	
}

Reminder.propTypes = {
  deleteReminder: PropTypes.func.isRequired
}

export default connect( null, { deleteReminder })(Reminder);