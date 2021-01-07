import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddLogin } from '../../actions/allUserActions';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';
//import swal from 'sweetalert';
import swal from 'sweetalert';
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

                //removes previous logged users details
              localStorage.removeItem("userId")
              localStorage.removeItem("bearerToken")
              localStorage.removeItem("loggedUserDetails")
              localStorage.removeItem("loggedUserDiary")
              const userDetails= response.data 
              //alert(JSON.stringify(userDetails))

              //data to be sent to the user actions reducer
              const userData={
                user: userDetails.data,
                isLoggedIn: true
              }

               //stores logged user id in the local storage
              localStorage.setItem("userId", userDetails.data.userID)
              localStorage.setItem("bearerToken", userDetails.accessToken)
        
              //sends the user details to the user reducer
              this.props.PostLogin(userData);

              swal(`Good job ${userDetails.data.username}!`, "You have logged in successfully!", "success");

              this.setState({ redirect: true })

              })

              .catch((error)=> {
                console.log(error);
                error.status === 401 ? alert("Please signup first..."): alert (error);
                // alert(error);
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
    PostLogin: (userData) => dispatch(AddLogin(userData))
  }
}

export default connect(null, mapDispatchToProps)(LogInForm);
