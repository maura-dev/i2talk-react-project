import React, { Component } from 'react';
import PropTypes from 'prop-types';


import '../../styles/faq.css'

class FaqItem extends Component {
  state = {
    showFaqBody: false
  };

  render() {
    const { title, body } = this.props.faqDetail;
    const { showFaqBody } = this.state;

    return (
      <div className="faq-box">
        <div className="question-heading">
          <h4>
            {title} 
          </h4>
          <i onClick = {()=>
            this.setState({ showFaqBody: !this.state.showFaqBody })
          } className="fas fa-plus"></i>
        </div>
        {showFaqBody ? (<div className="answer"><p>{body}</p></div>) : null}
      </div>
    )
  }
}

FaqItem.propTypes = {
  faqDetail: PropTypes.object.isRequired
}

export default FaqItem;
