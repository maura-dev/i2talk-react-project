import React, { Component } from 'react';
import PropTypes from 'prop-types';


import '../../styles/faq.css'

class FaqItem extends Component {
  constructor(props){
    super(props)

    this.state = {
    showFaqBody: false
    };
  }
  

  render() {
    const { question, answer } = this.props.faqDetail;
    const { showFaqBody } = this.state;

    return (
      <div className="faq-box">
        <div className="question-heading">
          <h4>
            {question} 
          </h4>
          <i onClick = {()=>
            this.setState({ showFaqBody: !this.state.showFaqBody })
          } className="fas fa-plus"></i>
        </div>
        {showFaqBody ? (<div className="answer"><p>{answer}</p></div>) : null}
      </div>
    )
  }
}

FaqItem.propTypes = {
  faqDetail: PropTypes.object.isRequired
}

export default FaqItem;
