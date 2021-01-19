import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Error from '../../forms/Error';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editReminder } from '../../../actions/ireminderActions';
import axios from 'axios'
import swal from '@sweetalert/with-react';

class EditForm extends Component {
  state = {
    message: '',
    timeCompleted: ''
  };
  
  componentDidMount(){
    const accessToken=localStorage.getItem("bearerToken");
		const { ID } = this.props.match.params;
		var config = {
		  method: 'get',
		  url: `https://i2talk.live/api/ireminder/reminder/${ID}`,
		  headers: {
		  	'Authorization': `Bearer ${accessToken}`
		  }
		};
    axios(config)
    .then((response) => {
      console.log(response.data.data);
      const reminderItem = response.data.data;
		  this.setState({
        ...this.state,
		  	message: reminderItem[0].message,
		  	timeCompleted: reminderItem[0].timeCompleted
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
  render() {
    const today = new Date(Date.now());

    // Making out a field error space
    const defaultErr = "error goes here";
    var errSpace = defaultErr;
    const { message, timeCompleted } = this.state;

    return (
      <div>
        <Formik
          enableReinitialize
          initialValues = {{ message: message, timeCompleted: timeCompleted }}
          
          validationSchema = {Yup.object({
            message: Yup
              .string()
              .required('Please enter reminder details!'),
            timeCompleted: Yup
              .date()
              .min(today, "You can't go back to the past, please enter a future date..."
              )
              .required('Please enter the date and time!'),
          })}

          onSubmit={
            (values, { resetForm }) => {
              console.log(values);
              const {ID} = this.props.match.params;

              const data = {
                title: "reminder",
                userID: ID,
                ...values
              };

              const accessToken=localStorage.getItem("bearerToken");

              var config = {
                method: 'put',
                url: `https://i2talk.live/api/ireminder/edit/${ID}`,
                headers: { 
                  'Authorization': `Bearer ${accessToken}` 
                },
                data : data
              };
              axios(config)
              .then( async(response)=> {
                this.props.editReminder(data)
                this.props.history.push('/dashboard/ireminder')
                await swal("Yay!", "Your note has successfully been edited.", "success");
              })
              .catch(function (error) {
                alert(error);
              });
            }
          }
          >

          {({ touched, errors, isSubmitting }) => (
            <Form>
              <div className="ireminder-form">
                <div className="ireminder-input">
                  <Field as="textarea" name="message" placeholder="Edit here..."/>
                  {errors.message && touched.message?
                    <Error 
                      errSpace = { errors.message }
                    /> :
                    <Error
                      errSpace = { defaultErr }
                    />
                  }

                  <Field type="datetime-local" name="timeCompleted" />
                  {errors.timeCompleted && touched.timeCompleted?
                    <Error 
                      errSpace = { errors.timeCompleted }
                    /> :
                    <Error
                      errSpace = { defaultErr }
                    />
                  }
                </div>
                
                <button className="shake" type="submit" disabled={isSubmitting} >
                  <i className="fas fa-alarm-clock"></i>
                </button>
                <button className="shake" onClick={()=>this.props.history.goBack()} >
                  <i className="fas fa-times-circle"></i>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    )
  }
}

EditForm.propTypes = {
  editReminder: PropTypes.func.isRequired
}

export default connect(null, { editReminder })( EditForm);