import React from 'react';
// import react router link 
import { Link } from 'react-router-dom';
import useChatMenu from "./privateChat/useChatMenu";
// import component images
import DummyDp from '../../img/users/male.png';

const ChatMenu =() => {
    //const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"))
    //const isender= loggedUserDetails.username
    //const bearerToken= localStorage.getItem("bearerToken")
   // const chatNo = document.getElementsByClassName("chat-counter")[0]
    //const chatImg = document.getElementsByClassName("chat-head-img")[0]
    //const chatScreen = document.getElementById("chat-menu");
    const isender= localStorage.getItem("username")
  
  const { senderChats } = useChatMenu(isender);

   // const ChatScreenName = chatroomiid => {
   //      const a = chatroomiid.replace(isender, "")
   //      const fresult = a.replace("_", "")
   //      return fresult;
   //  }   ​

    return (
      <div className="chat-menu">

        <div className="chat-menu-head">
          <div className="chat-menu-profile">
            <div className="chat-menu-open side-bar-profile"> 
              <Link to="/dashboard/profile">
                <img src={DummyDp} alt=""/>
              </Link>
            </div>
            
            <Link to="/dashboard/isearch" className="tooltip">
              <i className="fas fa-search fa-1x"></i>
              <span className="tooltiptext">iSearch</span>
            </Link>
            
            <div className="tooltip">
              <Link to="#"><i className="far fa-comment-dots"></i></Link>
              <p className="tooltiptext">New Chat</p>
            </div>
            
            <div className="tooltip">
              <Link to="#"><i className="fas fa-ellipsis-v"></i></Link>
              <p className="tooltiptext">Menu</p>
            </div>
          </div>

          <div className="chat-header">
            <span>Chats</span>
            <span className="chat-counter"></span>
          </div>
          
        </div>

        <div className="chat-contact-list scrollbar" id="user-chat-menu">
          <div id="chat-menu">
          <br />
              {senderChats.map( chat => (

                <Link to={`/dashboard/directmsg/${chat.receiver}`}>  
                <div class="chat-box">
                  <div class="chat-box-col1">
                  <div class="chat-box-img">
                    <img src={DummyDp} alt=""/>
                  </div>
                  </div>
                  <div class="chat-box-col2">
                  <h4>{chat.receiver}</h4> 
                  <span class="chat-counter">1</span>
                  <p>{chat.lastMessage}</p>
                  <h6>{chat.updatedAt}</h6>
                  </div>
                  </div>
                  </Link>
                ))}


          </div>
        </div>
        
      </div>
    )
  
}

export default ChatMenu;