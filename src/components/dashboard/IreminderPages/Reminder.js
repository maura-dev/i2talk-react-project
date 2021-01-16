import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToggleEdit } from '../../../actions/ireminderActions';

class Reminder extends Component{

	render(){
    console.log(this.props);
	  const { id, time, remindNote } = this.props.reminder;
    
    return(
      <React.Fragment>
        <div className="ireminder-item">
          <div className="ireminder-head">
            <p>{time}</p>
            <i className="far fa-pen edit" onClick={this.props.ToggleEdit(id)}></i>
            <i className="far fa-trash-alt delete"></i>
          </div>
          <div className="ireminder-msg">
            <p> {remindNote} </p>
          </div>
          
          {/* <div id="buttons">
            <Link to={`/idiary/editNote/${id}`}>
              <span style={{fontSize:"20px", color:"var(--primary-color)"}} align="right">
                <i className="far fa-edit icon"></i>
              </span>
            </Link>
            
            <span style={{fontSize:"20px", color: "var(--primary-color)"}} onClick={this.deleteNote.bind(this,id)}>
              <i className="far fa-trash-alt icon"></i>
            </span>
          </div> */}
        </div>
      </React.Fragment>
		)
	}
	
}

Reminder.propTypes = {
  ToggleEdit: PropTypes.func.isRequired,
  reminder: PropTypes.object.isRequired
};

// const mapStateToProps = (state) => ({
// 	editForm: state.editForm.editForm
// })

export default connect( null, { ToggleEdit })(Reminder);