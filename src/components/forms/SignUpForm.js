import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { AddUser } from '../../actions/signUpAction';
import LocationInput from './LocationInput';
import PhoneInputField from './phone';
import SexInput from './sexInput';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formatPhoneNumber } from 'react-phone-number-input'
import { addUser } from '../../actions/usersAction';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

class SignUpForm extends Component {

  render () {
    return(
      <div className="hero-modal-form" >
        <div className ="wrapper">
          <div className ="title">Sign Up</div>
          <Formik

            initialValues={{ fullName: '', username: '', email: '', tel: '', location:'', sex:'', password: '', cPassword: ''}}
            validationSchema = {Yup.object({
              fullName: Yup
                .string()
                .max(15, 'Must be 15 characters or less')
                .required('Your full name is required'),
              username: Yup
                .string()
                .max(20, 'Must be 20 characters or less')
                .required('Username is required'),
              email: Yup
                .string()
                .email('Invalid email address')
                .required('Email is required'),
              password: Yup
                .string()
                .required('Please enter your password')
                .max(15, 'Please try a shorter password.')
                .matches(
                  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                  'Password must contain at least 8 characters, one uppercase, one number and one special case character'
                ),
              cPassword: Yup
                .string()
                .required('Please re-enter your password')
                .test('passwords-match', 'Passwords not a match', function(value) {
                  return this.parent.password === value;
                }),
            })}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              const phone= values.tel
              const national= phone && formatPhoneNumber(phone)
              const newValues={...values, tel:national, countryCode:"+234"}
              setTimeout(() => {
                alert(JSON.stringify(newValues, null, 2));
                setSubmitting(false);
              }, 400);

              const newUser = JSON.stringify(values, null, 2);

              this.props.addUser(newUser);
              resetForm();
            }}
          >

            {({ isSubmitting }) => (
              <Form>
                <div className='field'>
                  <Field type="fullName" name="fullName" />
                  <label htmlFor="fullName">Full Name</label>
                </div>
                <ErrorMessage name="fullName" component="div" />

                <div className='field'>
                  <Field type="username" name="username" />
                  <label htmlFor="username">Username</label>
                </div>
                <ErrorMessage name="username" component="div" />

                <div className='field'>
                  <Field type="email" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <ErrorMessage name="email" component="div" />

                <div className="field">
                  <Field
                  type="tel"
                  name="tel"
                  component={PhoneInputField}
                  />
                </div>

                <div className="field">
                  <LocationInput />
                  <label htmlFor="location">Location</label>
                </div>
                <ErrorMessage name="location" component="div" />

                <div className='field'>
                  <SexInput/>
                  <label htmlFor="sex">Sex</label>
                </div>
                <ErrorMessage name="email" component="div" />

                <div className='field'>
                  <Field type="password" name="password" />
                  <label htmlFor="password">Password</label>
                </div>
                <ErrorMessage name="password" component="div" />

                <div className='field'>
                  <Field type="password" name="cPassword" />
                  <label htmlFor="cPassword">Confirm password</label>
                </div>
                <ErrorMessage name="cPassword" component="div" />

                <p><small>By clicking Sign Up, you agree to our <a href="./terms.html">Terms</a>, 
                  <a href="./security&privacy.html">Privacy Policy</a>. 
                  You may receive SMS notifications from us and can opt out at any time.</small>
                </p>

                <button type="submit">
                  Submit
                </button>

                <p>Already have an account? <a href="./index.html">Log In</a></p>
              </Form>
            )}
           
          </Formik>

        </div>
        <div className="close-icon">
          <i onClick = {this.props.hideForm} className="fas fa-times"></i>
        </div>
      </div>
    )
  }
}

SignUpForm.propTypes = {
  addUser: PropTypes.func.isRequired
}

export default connect(null, addUser)(SignUpForm);