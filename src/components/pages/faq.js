import React, { Component } from 'react';
import FaqItem from '../layout/faqItem';
import FaqImage from '../../img/faq.svg';

class Faq extends Component {
  state= {
    faqDetails: [
      {
        id: 1,
        title: 'Why should I use i2talk?',
        body: 'i2talk is an online chatting platform that infuses a diary for message storage, schedular and reminder to notify you of events as well as location-based user search. These amazing features make communication easy and effective.'
      },
      {
        id: 2,
        title: 'How do I find other users?',
        body: 'To find other users, you have to turn on locations on your device settings, go to your profile dashboard and click iSearch.'
      },
      {
        id: 3,
        title: 'How do I retrieve my password?',
        body: 'If you forget your password while trying to login, click the forget password link and it takes you to a page to input the email address you used in creating your account. After submitting this, a reset password/link is sent to that e-mail address and you are good to go.'
      },
      {
        id: 4,
        title: 'How do I save a message to iDiary?',
        body: 'To save a message to iDiary, select the message and click the "iDiary" option. To eventually access the message, go to your profile dashboard and select "iDiary", all your saved messages become visible.'
      },
      {
        id: 5,
        title: 'How do I schedule a message?',
        body: 'To schedule a message or status, go to your profile dashboard and select "iSchedule". Input the message to be scheduled as well as the recipient of this message. The recipient can be a friend or your status that is if you want the message to be posted on your status. After this, select the time and date for the message to be sent.'
      },
      {
        id: 6,
        title: 'How do I use the iReminder?',
        body: 'To use the iReminder option, go to your profile dashboard and select "iReminder". Input the topic of reminder ,date and time to be reminded.'
      },
      {
        id: 7,
        title: 'How do I join a chatroom?',
        body: "Go to your profile dashboard, select 'chatrooms'. Input the topic you're looking for and select from suggestions provided and you're in!"
      }
    ]
  }

  render() {
    const { faqDetails } = this.state;

    return (
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
    )
  }
}

export default Faq;