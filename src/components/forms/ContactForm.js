import React, { Component } from 'react';
import ContactTextInput from './ContactTextInput';

import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import '../../App.css';
import '../../styles/contactUs.css';

class ContactForm extends Component {

  render () {
    return(
      <div className="container">
        <div className ="text">Contact Us</div>
        <Formik

          initialValues={{ firstName: '', lastName: '', email: '', username: '', message: ''}}
          validationSchema = {Yup.object({
            firstName: Yup
              .string()
              .max(15, 'Must be 15 characters or less'),
            lastName: Yup
              .string()
              .max(15, 'Must be 15 characters or less'),
            username: Yup
              .string()
              .max(20, 'Must be 20 characters or less')
              .required('Username is required'),
            email: Yup
              .string()
              .email('Invalid email address')
              .required('Email is required'),
            message: Yup
              .string()
              .required('Please enter your message'),
          })}

          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
            this.props.PostContact(JSON.stringify(values, null, 2));
            resetForm();
          }}
        >

          {({ isSubmitting }) => (
            <Form>
              <div className="form-row">
                <div className='input-data'>
                  <Field type="firstName" name="firstName" />
                  <div className="underline"></div>
                  <label htmlFor="firstName">Full Name</label>
                </div>
                

                <div className='input-data'>
                  <Field type="lastName" name="lastName" />
                  <div className="underline"></div>
                  <label htmlFor="lastName">Full Name</label>
                </div>
                
              </div>

              <div className="form-row">
                <div className='input-data'>
                  <Field type="username" name="username" />
                  <div className="underline"></div>
                  <label htmlFor="username">Username</label>
                </div>
    

                <div className='input-data'>
                  <Field type="email" name="email" />
                  <div className="underline"></div>
                  <label htmlFor="email">Email</label>
                </div>
                
              </div>

              <div className="form-row">
                <div className="input-data textarea">
                  <Field as="textarea" name="message" />
                  <div className="underline"></div>
                  <label htmlFor="message">Message</label>
                </div>
                
              </div>

              <ErrorMessage name="firstName" component="div" />
              <ErrorMessage name="lastName" component="div" />
              <ErrorMessage name="username" component="div" />
              <ErrorMessage name="email" component="div" />
              <ErrorMessage name="message" component="div" />
              
              <button type="submit">
                Submit
              </button>

              <p className="contact-plist">
                <a href="tel:+2348012345678" target="_blank"><i className="fas fa-phone"> </i> &nbsp; <span>+2348012345678 &nbsp; </span> &nbsp; </a>
                <a href="mailto: hello@i2talk.com" target="_blank"> <i className="fa fa-envelope"> </i> &nbsp; <span>hello@i2talk.com &nbsp; </span> &nbsp; </a>
                <a href="https://www.linkedin.com/in/i2talk" target="_blank"><i className="fab fa-linkedin"> &nbsp; </i> <span> i2talk &nbsp;</span> &nbsp; </a>
              </p>
            </Form>
          )}
          
        </Formik>

      </div>
    )
  }
}


export default ContactForm;