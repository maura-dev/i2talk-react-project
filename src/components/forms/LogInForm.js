import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddLogin } from '../../actions/allUserActions';
import axios from 'axios'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Error from './Error'
import { Redirect } from 'react-router-dom';
import swal from 'sweetalert';
class LogInForm extends Component {

  constructor() {
    super();
    this.state = {
      redirect: false,
      loading:false
    }
  }

  render () {

    if (this.state.redirect) {
        return <Redirect to='/dashboard' />
    }

    const { loading }= this.state;

    // Making out a field error space
    const defaultErr = "error goes here";
    var errSpace;

    return(
      <div className="hero_form" >
        <div className ="wrapper">
          <div className ="title">Login</div>
          <br />
          <Formik

            initialValues={{ login: '', password: '' }}

            validationSchema = {Yup.object({
              login: Yup
                .string()
                .min(2, 'Too Short!')
                .required('Please enter your Username, Email or Phone number'),
              password: Yup
                .string()
                .required('Please enter your password'),
            })
            
          }
            
            onSubmit={async (values, { setSubmitting, resetForm }) => {

              //removes previous logged users details
              localStorage.clear()

              this.setState({
                ...this.state,
                loading: true 
              });
              
              await axios.post('login', values)
              .then((response)=> {
                this.setState({
                  ...this.state,
                  loading:false 
                });

                const userDetails= response.data 
                //alert(JSON.stringify(userDetails))

                //data to be sent to the user actions reducer
                const userData={
                  user: userDetails.data,
                  isLoggedIn: true
                }

               //stores logged user id in the local storage
               localStorage.setItem("loggedUserDetail", JSON.stringify(userDetails.data));
              localStorage.setItem("userId", userDetails.data.userID)
              localStorage.setItem("bearerToken", userDetails.accessToken)
              localStorage.setItem("isLoggedIn", userData.isLoggedIn)
              //localStorage.setItem("username", userDetails.data.username)
              //sends the user details to the user reducer
              this.props.PostLogin(userData);

                swal(`Good job ${userDetails.data.username}!`, "You have logged in successfully!", "success");

                this.setState({...this.state, redirect: true })

              })

              .catch((error)=> {
                this.setState({
                  ...this.state,
                  loading: false 
                });
                var errMsg = "Request failed with status code";
                if (error.message === `${errMsg} 401`){
                  swal("Please signup and authenticate your account first...")
                } else if (error.message === `${errMsg} 400`){
                  swal("Cannot process your request... Please try again.")
                } else {
                  swal("Please hold on... Try again after a few moments.")
                }
              });
              resetForm();
            }}
          >

            {({ errors, touched }) => (
              <Form>
                <div className='field'>
                  <Field type="login" name="login" />
                  <label htmlFor="login">Username, Email or Phone</label>
                </div>
                {errors.login && touched.login ?
                  <Error 
                    errSpace = { errors.login }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }

                <div className='field'>
                  <Field type="password" name="password" />
                  <label htmlFor="password">Password</label>
                </div>
                {errors.password && touched.password?
                  <Error 
                    errSpace = { errors.password }
                  /> :
                  <Error
                    errSpace = { defaultErr }
                  />
                }
                
                <div className="content">
                  <div className="checkbox">
                    <Field type="checkbox" name="checkbox" />
                    <label htmlFor="checkbox"> &nbsp;Remember Me</label>
                  </div>
                  <div className="pass-link"><a href="./lost_password.html">Forgot password?</a></div>
                </div>

                <button type="submit" style={{marginBottom: "20px"}}>
                  {loading ? (<i className="fa fa-spinner fa-spin"></i>) : "Submit"}
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
