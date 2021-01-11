import React, { Component} from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

class Reminder extends Component{

	render(){
	
	  const { id, time, remindNote } = this.props.reminder;
    
    return( 
      <div className="ireminder-item">
        <div className="ireminder-head">
          <p>{time}</p>
          <i className="far fa-pen edit" onClick={this.props.showEdit}></i>
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
		)
	}
	
}

Reminder.propTypes = {
  reminder: PropTypes.object.isRequired
};

export default Reminder;