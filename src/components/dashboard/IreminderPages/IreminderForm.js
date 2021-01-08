import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addReminder } from '../../../actions/ireminderActions';
import { v4 as uuid } from 'uuid';

class IreminderForm extends Component {
  render() {
    const today = new Date(Date.now());

    return (
      <div>
        <Formik

          initialValues={{ remindNote: '', time: '' }}
          
          validationSchema = {Yup.object({
            remindNote: Yup
              .string()
              .required('Please enter reminder details!'),
            time: Yup
              .date()
              .min(today, "You can't go back to the past, please enter a future date..."
              )
              .required('Please enter the date and time!'),
          })}

          onSubmit={
            (values, { resetForm }) => {
              const correctTime = values.time;
              correctTime.slice(-6, -5);
              const newReminder = {
                id: uuid(),
                remindNote: values.remindNote,
                time: correctTime
              };

              this.props.addReminder(newReminder);
              resetForm();
            }
          }
          >

          {({ isSubmitting }) => (
            <Form>
              <div className="ireminder-form">
                <div className="ireminder-input">
                  <Field as="textarea" name="remindNote" placeholder="Remind me of..."/>
                  <ErrorMessage name="remindNote" component="p" />
                  
                  <Field type="datetime-local" name="time" />
                  <ErrorMessage name="time" component="p" />
                </div>
                
                <button className="shake" type="submit" disabled={isSubmitting}>
                  <i className="fas fa-alarm-clock"></i>
                </button>
              </div>
            </Form>
          )}

        </Formik>
      </div>
    )
  }
}

IreminderForm.propTypes = {
  addReminder: PropTypes.func.isRequired
}

export default connect(null, { addReminder })( IreminderForm);