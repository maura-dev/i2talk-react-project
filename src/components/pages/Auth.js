import React, { Component } from 'react';
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
    isAuthenticated: false,
    loading:false,
    otploading: false
  };

  handleChange = otp => this.setState({ otp });

  onClick=()=>{
  	this.setState({
  		...this.state,
  		otploading:true 
  	});
  	const passcode =this.state.otp
  	const token= localStorage.getItem('token')
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
	  localStorage.removeItem("token")
	   this.setState({
	   	...this.state,
	   	isAuthenticated:true,
	   	otploading:false
	   });

	})
	.catch(async (error)=> {
		await this.setState({
			...this.state,
			otploading:false 
		});
	  alert(error);
	});
  }

	render(){
		if (this.state.isAuthenticated) {
            return (
              <Redirect to='/' />
            )
        }

        const { loading, otploading }= this.state
		
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
			                  	onSubmit={ (values, { setSubmitting, resetForm }) =>{
			                  		
			                  		if(values.auth==="none"){
			                  			document.getElementById("authError").style.display="block"
			                  			resetForm()
			                  		}
			                  		else{
			                  			this.setState({
			                  				...this.state,
			                  				loading:true 
			                  			});
			                  			const verificationDeets= localStorage.getItem('verificationDetails')

			                  			
				                  		var data = {
				                  			"accessToken" : verificationDeets,
				                  			"type": values.auth
										   
														}

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
											await this.setState({
												...this.state,
												loading: false 
											});

											if(config.data.type==="email"){
												swal("Activation code sent!\n Check your mail", "You are one step closer", "success")
											}else{
												localStorage.setItem('token', response.data.token)
												swal("Activation code sent!", "You are one step closer", "success");
											}
										
										})
										.catch( (error)=> {
											this.setState({
												...this.state,
												loading: false 
											});
										  alert(error);
										});
				                  		resetForm()
				                  	}
			                  	}}
			                  >

			                  	 {({ isSubmitting }) => (
			              			<Form>
			                			<div className='field'>
						                  <Field name="auth" as="select" id="auth-select">
						                  	<option value="none">----Select Authentication Option----</option>
										   <option value="sms">SMS</option>
										   <option value="call">Call</option>
										   <option value="email">Email</option>  
										 </Field>
										 <p id="authError" style={{display:"none", color:"red"}}>Select a valid authentication option</p>
										</div>

										<button type="submit">
						                  {loading ? (<i className="fa fa-spinner fa-spin"></i>) : "Submit"}
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
					        <button className="otp-auth-button" onClick={this.onClick}>
					        	{otploading ? (<i className="fa fa-spinner fa-spin"></i>) : "Submit"}
					        </button>
				    </div>
				</div>
			</div>

	        <Footer />
	     </React.Fragment>
			
		)
	}
}


             