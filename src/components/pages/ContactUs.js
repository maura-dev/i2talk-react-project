import React, { Component } from 'react';
import ContactForm from '../forms/ContactForm';


import '../../App.css';
import '../../styles/contactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div className="main">
        <ContactForm />
      </div>
    )
  }
}

export default ContactUs;