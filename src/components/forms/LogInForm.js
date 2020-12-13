import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddLogin } from '../../actions/loginAction';
import TextInputGroup from './TextInputGroup';

import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';

class LogInForm extends Component {
  render () {
    return(
      <div className="hero_form" >
        <div className ="wrapper">
          <div className ="title">Login</div>
          <Formik

            initialValues={{ email: '', password: '' }}

            validationSchema = {Yup.object({
              email: Yup
                .string()
                .email('Invalid email address')
                .required('Please enter your email address'),
              password: Yup
                .string()
                .required('Please enter your password'),
            })}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
              this.props.PostLogin(JSON.stringify(values, null, 2));
              resetForm();
            }}
          >

            {({ isSubmitting }) => (
              <Form>
                <div className='field'>
                  <Field type="email" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
                <ErrorMessage name="email" component="div" />

                <div className='field'>
                  <Field type="password" name="password" />
                  <label htmlFor="password">Password</label>
                </div>
                <ErrorMessage name="password" component="div" />

                <div className="content">
                  <div className="checkbox">
                    <Field type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox">Remember Me</label>
                  </div>
                  <div className="pass-link"><a href="./lost_password.html">Forgot password?</a></div>
                </div>

                <button type="submit">
                  Submit
                </button>
              </Form>
            )}

          </Formik>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    PostLogin: (data) => dispatch(AddLogin(data))
  }
}

export default connect(null, mapDispatchToProps)(LogInForm);
