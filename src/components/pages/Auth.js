import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Header from '../layout/header'
import Footer from '../layout/footer'
import axios from 'axios'
import OtpInput from 'react-otp-input';
import '../../styles/Auth.css'
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';

export default class Auth extends Component{

	state = {
    otp: '',
    isAuthenticated: false
  };

  handleChange = otp => this.setState({ otp });

  onClick=()=>{
  	const passcode =this.state.otp
  	const token= localStorage.getItem('token')
	  //alert(token)                			
  	//const token= localStorage.getItem("token")
  	var data = {
    	"onetimepass" :Number(passcode)
  	}

	var config = {
	  method: 'post',
	  url: 'https://i2talk.live/api/auth/activation/',
	  headers: { 
	    'x-verify-token': token
	  },
	  data : data
	};

	axios(config)
	.then(async (response)=> {
	  await swal(`${response.data}`, "Yay!!!", "success");;
	  localStorage.removeItem("verificationDetails");
	   this.setState({
	   	isAuthenticated:true 
	   });

	})
	.catch(function (error) {
	  alert(error);
	});
  }

	render(){
		if (this.state.isAuthenticated) {
            return (
              <Redirect to='/' />
            )
        }
		
		return(
			<React.Fragment>
				<Header />
				 <div className="hero-form" style={{padding:"3% 20% 3% 20%"}}>
       				 <div className ="wrapper"  style={{padding:"30px", border:"2px solid var(--primary-color)"}}>
	       				 <div>
	          				<div className ="title">User Authentication</div>
	          				<br />
			                  <h3 style={{textAlign:"center"}}>Congrats!</h3>
			                  <p style={{textAlign:"center"}}>Signup Sucessful! Please, select your activation option and activate your account!</p>
						
			                  <Formik
			                  	initialValues={{ auth:''}}
			                  	onSubmit={async (values, { setSubmitting, resetForm }) => {
			                  		
			                  		if(values.auth==="none"){
			                  			document.getElementById("authError").style.display="block"
			                  			resetForm()
			                  		}
			                  		else{
			                  			const verificationDeets= localStorage.getItem('verificationDetails')

			                  			
				                  		var data = {
				                  			"accessToken" : verificationDeets,
				                  			"type": values.auth
										   
														}

										//alert(JSON.stringify(data))
										//alert(verificationDeets.accessToken)
										var config = {
										  method: 'post',
										  url: 'https://i2talk.live/api/activation',
										  headers: {
										  	"accessToken" : verificationDeets
										   } ,
										  data : data
										};

										axios(config)
										.then( async (response)=> {
											//alert(JSON.stringify(response))

											localStorage.setItem('token', response.data.token)
											await swal("Activation code sent!", "You are one step closer", "success");
										  	//alert("Activation Code Sent!")
										
										})
										.catch( (error)=> {
										  alert(error);
										});
				                  		resetForm()
				                  	}
			                  	}}
			                  >

			                  	 {({ isSubmitting }) => (
			              			<Form>
			                			<div className='field'>
						                  <Field name="auth" as="select">
						                  	<option value="none">--Select Authentication Option--</option>
										   <option value="sms">SMS</option>
										   <option value="call">Call</option>
										   <option value="email">Email</option>  
										 </Field>
										 <p id="authError" style={{display:"none", color:"red"}}>Select a valid authentication option</p>
										</div>

										<button type="submit">
						                  Submit
						                </button>
						                <br/>
									</Form>
					            )}
					        </Formik>
			            </div>
			            <br />
			            <br />
			           	<hr />
			            <div style={{paddingTop:"30px"}}>
			            	<p style={{textAlign:"center"}}>Upon suceessful activation, input your secret code in the input box below and click the submit button</p>
			            	<br />
					        <OtpInput
					          onChange={this.handleChange}
					          numInputs={6}
					          separator={<span>-</span>}
					          containerStyle="otp-container"
					          inputStyle="input-style"
					          focusStyle="focus-style"
					          value={this.state.otp}
					        />
					        <button className="otp-auth-button" onClick={this.onClick}>Submit</button>
				    </div>
				</div>
			</div>

	        <Footer />
	     </React.Fragment>
			
		)
	}
}


             