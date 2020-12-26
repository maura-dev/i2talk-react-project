import React, { Component } from 'react'
import TextInput from '../dashboardComponents/textArea';

export default class Chatroom extends Component{
	state={
		viewMenu: false
	}

	componentDidMount(){
		document.getElementById("chatroom").style.display="none"
	}

	onChange=(e)=>{
    var autoExpand = function (field) {

    // Reset field height
    field.style.height = 'inherit';

    // Calculate the height
    var height = field.scrollHeight + 5
                 
    field.style.height = height + 'px';

    };

    document.addEventListener('input', function (event) {
      if (event.target.tagName.toLowerCase() !== 'textarea') return;
      autoExpand(event.target);
    }, false);
  }

 	render() {
 		const {chatname}= this.props.match.params
 		const { viewMenu }= this.state	

	    return (
	      <div className="chat-message" id="user-direct-chat">
	        <div className="chat-header">

	          <a className="message-back-arrow" onClick="showSideBar('user-chat-menu', 'user-direct-chat')"><i className="fas fa-long-arrow-alt-left"></i></a>
	          
	          <div className="chat-head-img">
	            <img src="/users/deven.jpg" />
	          </div>

	          <div className="chat-head-username">
	            <span id="Chatsheader"><h3>{chatname}</h3></span>
	          </div>

	          <div className="chat-head-menu">
	            <a>
	            <i className="fas fa-ellipsis-v" onClick={()=>{
	            	this.setState({
	            	viewMenu: true
	            	})
	            }}>
	            </i></a>
	          </div>

	         	{viewMenu ? (<ul className="" id="chat-menu-list">
	          	<li onClick={()=>{
	          		this.props.history.goBack();
	          		document.getElementById("chatroom").style.display="flex"
	          	}}>Leave Room</li>
	            <li>View Members</li>
	            <li>Mute notifications</li>
	            <li>Search</li>
	            <li>Report</li>
	          </ul>) : null}

	        </div>

	        <div className="chat-body scrollbar" id="style-2">
	          
	          <div id="pmessages"></div>

	          <div id="messs"></div>

	        </div>

	        <div className="chat-form">

	          <form id="pmessageForm">
	            <TextInput id="pmsg-input" placeholder="Type message here ..." rows="1" onChange={this.onChange} className="textScrollbar"/>
	            {/*<textarea id="pmsg-input" autoCapitalize= "sentences" autoComplete="on" placeholder="Type message here ..." rows="1" required></textarea>*/}
	            <button className="pmsg-btn"><i className="far fa-paper-plane"></i></button>
	          </form>

	        </div>
	      </div>
	    )
 	}
}