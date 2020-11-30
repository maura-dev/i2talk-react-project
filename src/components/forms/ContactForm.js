import React, { Component } from 'react';
import ContactTextInput from '../layout/ContactTextInput';


import '../../App.css';
import '../../styles/contactUs.css';

class ContactForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
  };

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { firstname, lastname, email, username } = this.state;

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
      firstname: '',
      lastname: '',
      email: '',
      username: ''
    });

    // this.props.history.push('/');
  };

  onChange = e => this.setState({[e.target.name] : e.target.value });

  render() {
    const { firstname, lastname, email, username } = this.state;

    return (
      <div className ="container">
        <div className ="text">Contact Us</div>
        {/* <form onSubmit={this.onSubmit.bind
          (this, dispatch)}> */}
        <form>
          <div className="form-row">
            <ContactTextInput 
              label="First Name"
              name="firstname"
              // placeholder="Enter Name..."
              value={firstname}
              onChange={this.onChange}
              // error={errors.name}
            />
            <ContactTextInput  
              label="Last Name"
              name="lastname"
              // placeholder="Enter Email..."
              value={lastname}
              onChange={this.onChange}
              // error={errors.email}
            />
          </div>
          <div className="form-row">
            <ContactTextInput 
              label="Email Address"
              name="email"
              // placeholder="Enter Name..."
              value={email}
              onChange={this.onChange}
              // error={errors.name}
            />
            <ContactTextInput  
              label="Username"
              name="username"
              // placeholder="Enter Email..."
              value={username}
              onChange={this.onChange}
              // error={errors.email}
            />
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <div className="underline"></div>
              <label>Write your message</label>
            </div>
          </div>
          <div className="but">
            <input type="submit" value ="Submit" className="sub-btn" />
          </div>
          
        </form>
      </div>
    )
  }
}


export default ContactForm;