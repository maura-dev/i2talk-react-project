import React, { Component } from 'react';
import ContactTextInput from './ContactTextInput';
import Error from './Error';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

import '../../App.css';
import '../../styles/contactUs.css';

class ContactForm extends Component {

  render () {
    // Making out a field error space
    const defaultErr = "error goes here";
    var errSpace;

    return(
      <div className="container">
        <div className ="text">Contact Us</div>
        <Formik

          initialValues={{ firstName: '', lastName: '', email: '', username: '', message: ''}}
          validationSchema = {Yup.object({
            firstName: Yup
              .string()
              .min(3, 'Must be more than 2 characters')
              .max(15, 'Must be 15 characters or less')
              .required('First Name is required'),
            lastName: Yup
              .string()
              .min(3, 'Must be more than 2 characters')
              .max(15, 'Must be 15 characters or less')
              .required('Last Name is required'),
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

          {({ touched, errors, isSubmitting }) => (
            <Form>
              <div className="form-row">
                <div className='input-data'>
                  <Field type="firstName" name="firstName" />
                  <div className="underline"></div>
                  <label htmlFor="firstName">First Name</label>
                </div>
               
                <div className='input-data'>
                  <Field type="lastName" name="lastName" />
                  <div className="underline"></div>
                  <label htmlFor="lastName">Last Name</label>
                </div>
                
              </div>
              <div className= "form-row">
                {errors.firstName && touched.firstName?
                  <Error 
                    errSpace = { errors.firstName }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }
                {errors.lastName && touched.lastName?
                  <Error 
                    errSpace = { errors.lastName }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }
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
              <div className= "form-row">
                {errors.username && touched.username?
                  <Error 
                    errSpace = { errors.username }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }
                {errors.email && touched.email?
                  <Error 
                    errSpace = { errors.email }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }
              </div>

              <div className="form-row">
                <div className="input-data textarea">
                  <Field as="textarea" name="message" />
                  <div className="underline"></div>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              {errors.message && touched.message?
                <Error 
                  errSpace = { errors.message }
                /> :
                <Error
                  errSpace = { defaultErr }
                />
              }
              
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