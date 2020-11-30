import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';

class LogInForm extends Component {
  state = {
    username: '',
    password: '',
    checkbox: ''
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { username, password, checkbox } = this.state;

    // check for errors

    // if (username === ''){
    //   this.setState({errors: { username: 'Username is required' }});
    //   return;
    // }
    // if (password === ''){
    //   this.setState({errors: { password: 'Password is required' }});
    //   return;
    // }

    // const newContact = {
    //   username,
    //   password
    // }

    // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    // dispatch({ type: 'ADD_CONTACT', payload: res.data });
    
    this.setState({
      username: '',
      password: '',
      checkbox: ''
    });

    // this.props.history.push('/');
  };

  onChange = e => this.setState({[e.target.name] : e.target.value });

  render() {
    const { username, password, checkbox } = this.state;

    return (
      <div className="hero_form" >
        <div className ="wrapper">
          <div className ="title">Login</div>
          {/* <form onSubmit={this.onSubmit.bind
            (this, dispatch)}> */}
          <form>
            <TextInputGroup 
              label="Username"
              name="username"
              // placeholder="Enter Name..."
              value={username}
              onChange={this.onChange}
              // error={errors.name}
            />
            <TextInputGroup 
              label="Password"
              name="password"
              type="password"
              // placeholder="Enter Email..."
              value={password}
              onChange={this.onChange}
              // error={errors.email}
            />
            <div className="content">
              <div className="checkbox">
                <TextInputGroup 
                  label="Remember me"
                  name="checkbox"
                  type="checkbox"
                  // placeholder="Enter Email..."
                  value={checkbox}
                  onChange={this.onChange}
                  // error={errors.email}
                />
              </div>
							<div className="pass-link"><a href="./lost_password.html">Forgot password?</a></div>
						</div>

            <input type="submit" value ="Login" 
            className="login-btn" />
          </form>
        </div>
      </div>
    )
  }
}


export default LogInForm;
