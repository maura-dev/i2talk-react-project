import React, { Component } from 'react';
// import page components
import Header from '../layout/header'
import Footer from '../layout/footer'
import ContactForm from '../forms/ContactForm';
// import page styling
import '../../App.css';
import '../../styles/contactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <ContactForm />
        </div>
        <Footer />
      </div>
    )
  }
}

export default ContactUs;