import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteReminder } from '../../../actions/ireminderActions';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import Moment from 'react-moment';


class Reminder extends Component{

  onDeleteClick = ID => {

    swal({
			title: "Are you sure?",
			text: "Once deleted, you will not have any reminder at this time!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})

		.then((willDelete) => {
			if (willDelete) {
				const accessToken=localStorage.getItem("bearerToken");
				var config = {
				  method: 'delete',
				  url: `https://i2talk.live/api/ireminder/delete/${ID}`,
				  headers: { 
				  	'Authorization': `Bearer ${accessToken}`
				  }
				};

				axios(config)
				.then(async (response)=> {
					await this.props.deleteReminder(ID)
					swal(" This reminder has been deleted!", {
						icon: "success",
					});
					
				  console.log(JSON.stringify(response.data));
				})
				.catch(function (error) {
				  alert(error);
				});
			} else{
				swal("This note is safe!");
			}
		})
  }

	render(){
	  const { ID, timeCompleted, message } = this.props.reminder;
    
    return(
        <div className="ireminder-item">
          <div className="ireminder-head">
            <p><Moment>{timeCompleted}</Moment></p>
            <Link to={`/dashboard/ireminder/editForm/${ID}`}>
              <i className="far fa-pen edit"></i>
            </Link>
            <i className="far fa-trash-alt delete" onClick={this.onDeleteClick.bind(this, ID)}></i>
          </div>
          <div className="ireminder-msg">
            <p> {message} </p>
          </div>
        </div>
		)
	}
}

Reminder.propTypes = {
  deleteReminder: PropTypes.func.isRequired
}

export default connect( null, { deleteReminder })( Reminder );