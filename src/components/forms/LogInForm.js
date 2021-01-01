import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddLogin } from '../../actions/loginAction';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
//import swal from 'sweetalert';
import swal from '@sweetalert/with-react';
class LogInForm extends Component {

  constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

  render () {

    if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }

    return(
      <div className="hero_form" >
        <div className ="wrapper">
          <div className ="title">Login</div>
          <Formik

            initialValues={{ login: '', password: '' }}

            validationSchema = {Yup.object({
              login: Yup
                .string()
                .required('Please enter your Username, Email or Phone number'),
              password: Yup
                .string()
                .required('Please enter your password'),
            })}

            onSubmit={async(values, { setSubmitting, resetForm }) => {
              
              await axios.post('login', values)
              .then((response)=> {
              
              localStorage.setItem("userDetails", JSON.stringify(response.data))
              const userDetails= response.data 
              this.props.PostLogin(userDetails);

              this.setState({ redirect: true })
              swal(`Good job ${userDetails.data.username}!`, "You have logged in successfully!", "success");

              })

              .catch((error)=> {
                alert(error);
              });
              resetForm();
            }}
          >

            {({ isSubmitting }) => (
              <Form>
                <div className='field'>
                  <Field type="login" name="login" />
                  <label htmlFor="login">Username, Email or Phone</label>
                </div>
                <ErrorMessage name="login" component="div" />

                <div className='field'>
                  <Field type="password" name="password" />
                  <label htmlFor="password">Password</label>
                </div>
                <ErrorMessage name="password" component="div" />

                <div className="content">
                  <div className="checkbox">
                    <Field type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox"> &nbsp;Remember Me</label>
                  </div>
                  <div className="pass-link"><a href="./lost_password.html">Forgot password?</a></div>
                </div>

                <button type="submit" style={{marginBottom: "20px"}}>
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
    PostLogin: (userDetails) => dispatch(AddLogin(userDetails))
  }
}

export default connect(null, mapDispatchToProps)(LogInForm);
