import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { ToggleEdit } from '../../../actions/ireminderActions';
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
            <i className="far fa-pen edit" 
            // onClick={this.props.ToggleEdit(id)}
            ></i>
            {console.log(ID)}
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
  // ToggleEdit: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired
};

// const mapDispatchToProps = dispatch => {
//   return {
//     // dispatching plain actions
//     ToggleEdit: () => dispatch(toggleEdit()),
//     deleteReminder: () => dispatch(deleteReminder(id))
//   }
// }

// const mapStateToProps = (state) => ({
// 	editForm: state.editForm.editForm
// })

export default connect( null, { deleteReminder })(Reminder);