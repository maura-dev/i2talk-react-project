import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import swal from '@sweetalert/with-react';
import axios from 'axios'

export default class Activation extends Component{

	state={
		redirect:false
	}
	componentDidMount(){
		const tokenObject= this.props.match.params
		//alert(JSON.stringify(token))
		const token= tokenObject.token
		var data=''

		var config = {
		  method: 'get',
		  url: `https://i2talk.live/api/auth/activation/${token}`,
		  headers: { },
		  data : data
		};

		axios(config)
		.then(async (response)=> {
			await swal("Account activated! You may proceed to login", "Yay!!!", "success")
			this.setState({
				redirect: true
			});
		  console.log(JSON.stringify(response.data));
		})
		.catch(function (error) {
		  alert(error);
		});
	}

	render(){
		if (this.state.redirect) {
            return (
              <Redirect to='/' />
            )
        }
		return(


			<div>
				<i className="fa fa-spinner fa-spin" style={{fontSize:"50px",margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}></i>
			</div>


		)
	}


}