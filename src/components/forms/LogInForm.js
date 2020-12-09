import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddLogin } from '../../actions/loginAction';
import TextInputGroup from './TextInputGroup';

class LogInForm extends Component {
  state = {
    username: '',
    password: ''
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
    const { username, password } = this.state;

    this.props.PostLogin(this.state);

    // check for errors

    // if (username === ''){
    //   this.setState({errors: { username: 'Username is required' }});
    //   return;
    // }
    // if (password === ''){
    //   this.setState({errors: { password: 'Password is required' }});
    //   return;
    // }

    // const newUser = {
    //   username,
    //   password
    // }

    // const res = await axios.post('https://jsonplaceholder.typicode.com/users', newContact);

    // dispatch({ type: 'ADD_CONTACT', payload: res.data });
    
    this.setState({
      username: '',
      password: '',
      // checkbox: ''
    });

    // this.props.history.push('/');
  };

  onChange = e => this.setState({[e.target.name] : e.target.value });

  render() {
    const { username, password } = this.props;

    return (
      <div className="hero_form" >
        <div className ="wrapper">
          <div className ="title">Login</div>
          {/* <form onSubmit={this.onSubmit.bind
            (this, dispatch)}> */}
          <form onSubmit={this.onSubmit}>
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
                  // value={checkbox}
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

const mapDispatchToProps = dispatch => {
  return {
    PostLogin: (data) => dispatch(AddLogin(data))
  }
}

export default connect(null, mapDispatchToProps)(LogInForm);
