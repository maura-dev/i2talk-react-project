import React, { Component } from 'react';
// import page component
import Header from '../layout/header'
import Footer from '../layout/footer'
import FaqItem from '../layout/faqItem';
// import page image
import FaqImage from '../../img/faq.svg';
import axios from 'axios'
class Faq extends Component {
  state={
    faqDetails:[]
  }

  componentDidMount(){
    axios.get('faq').then(
      res => this.setState({
        faqDetails: res.data.data
      }),
    )
  }
  

  render() {
    const { faqDetails } = this.state;

    return (
      <div>
        <Header />
        
        <div>
          <div className="faq-heading">
            <img src={FaqImage} alt="faq illustration"/>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-questions">
            {faqDetails.map(faqDetail =>
              <FaqItem 
                key={faqDetail.Id}
                faqDetail={faqDetail} 
              />
            )}
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default Faq;