import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import Auth from '../pages/Auth'
import LocationInput from './LocationInput';
import PhoneInputField from './phone';
import SexInput from './sexInput';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formatPhoneNumber } from 'react-phone-number-input'
import { addUser } from '../../actions/usersAction';
// import { RegionDropdown, CountryDropdown } from 'react-country-region-selector';
// import PhoneInputCountry from './PhoneInputCountry'
import swal from '@sweetalert/with-react';

import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class SignUpForm extends Component {

  constructor() {
        super();
        this.state = {
            redirect: false,
            loading:false
        }
    }

  render () {

    if (this.state.redirect) {
      return (
        <Redirect to='/auth' />
      )
    }

    const { loading } = this.state

    return(
        <div className="hero-modal-form" >
          <div className ="wrapper">
            <div className ="title">Sign Up</div>
            <Formik

              initialValues={{ fullName: '', username: '', email: '', sex:'', country:'Nigeria', state:'', phone:'', password: ''}}
              
              validationSchema = {Yup.object({
                fullName: Yup
                  .string()
                  .max(25, 'Must be 25 characters or less')
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

              onSubmit={ async(values, { setSubmitting, resetForm }) => {
                localStorage.removeItem("verificationDetails")
                this.setState({
                  ...this.state,
                  loading: true
                });

                const tel= values.phone
                const national= tel && formatPhoneNumber(tel)
                const newPhone= national.split(" ").join("")
                 const newValues={
                   "fullName": values.fullName, 
                   "username": values.username, 
                   "password": values.password,
                   "email": values.email,
                   "countryCode": "234", 
                   "phone": newPhone, 
                   "sex":values.sex,
                   "state":values.state    
                 }
                   
                var config = {
                  method: 'post',
                  url: 'https://i2talk.live/api/signup',
                  headers: { },
                  data : newValues
                };

                await axios(config)
                .then( (response)=> {
                  //changes the loader state to false
                  this.setState({
                    ...this.state,
                    loading:false 
                  });

                  //saves accesstoken to be used for authentication
                  localStorage.setItem("verificationDetails", response.data.accessToken)
                  //const newUserDetails= response.data 
                  //alert(JSON.stringify(response.data))
                  swal("Signup successful!", "Proceed to authenticate your account", "success");
                  this.setState({...this.state, redirect: true })
                })
                .catch( (error)=> {
                  this.setState({
                    ...this.state,
                    loading:false 
                  });
                  alert(error.message);
                });
                resetForm();
              }}
            >

              {({
                isSubmitting, values, handleChange, handleBlur
              }) => (
                <Form>
                  <div className='field'>
                    <Field type="text" name="fullName" />
                    <label htmlFor="fullName">Full Name</label>
                  </div>
                  <ErrorMessage name="fullName" component="p" className="form-errors"/>

                  <div className='field'>
                    <Field type="text" name="username" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <ErrorMessage name="username" component="p" className="form-errors"/>

                  <div className='field'>
                    <Field type="email" name="email" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <ErrorMessage name="email" component="p" className="form-errors"/>

                  {/* <div className='sex-input-field'>
                    <div className="label"> Sex: </div>
                    <label>
                      <Field type="checkbox" name="sex" value="female" />
                      <span> Female</span>
                    </label>
                    <label>
                      <Field type="checkbox" name="sex" value="male" />
                      <span> Male</span>
                    </label> 
                    <ErrorMessage name="sex" component="p" />
                  </div> */}

                  <div className="field">
                    <Field
                    type="phone"
                    name="phone"
                    component={PhoneInputField}
                    />
                  </div>

                  <div className="field">
                    <LocationInput />                
                  </div>
                  <ErrorMessage name="state" component="div" className="form-errors"/>

                  <div className="field">
                    <SexInput />                
                  </div>
                  <ErrorMessage name="state" component="div" className="form-errors"/>

                  {/* <div className='field'>
                    <Field
                      type="tel" component= { PhoneInputCountry } name="phone" value=""
                    />
                  </div>
                  <ErrorMessage name="phone" component="p" />

                  <div className='field country-select'>
                    <CountryDropdown name="country" value={values.country}
  	                  onChange={(_, e) => handleChange(e)} onBlur={handleBlur} 
                    />
                    <RegionDropdown name="state" country={values.country} value={values.state}
  	                  onChange={(_, e) => handleChange(e)} onBlur={handleBlur} 
                    />
                  </div>
                  <ErrorMessage name="state" component="p" /> */}
                  
                  <div className='field'>
                    <Field type="password" name="password" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <ErrorMessage name="password" component="p" className="form-errors" />

                  <div className='field'>
                    <Field type="password" name="cPassword" />
                    <label htmlFor="cPassword">Confirm password</label>
                  </div>
                  <ErrorMessage name="cPassword" component="p" className="form-errors"/>

                  <p><small>By clicking Sign Up, you agree to our <a href="./terms.html">Terms</a>, 
                    <a href="./security&privacy.html">Privacy Policy</a>. 
                    You may receive SMS notifications from us and can opt out at any time.</small>
                  </p>

                  <button type="submit" disabled={isSubmitting}>
                   {loading ? (<i className="fa fa-spinner fa-spin"></i>) : "Submit"}
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

// SignUpForm.propTypes = {
//   addUser: PropTypes.func.isRequired
// }

// export default connect(null, addUser)(SignUpForm);
export default SignUpForm;