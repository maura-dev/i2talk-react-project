import React from 'react';
// import react router link 
import { Link } from 'react-router-dom';

const SideBar = () => {

  return (
    <div className="chat-container-sidebar">
      <div id="side-bar-icons">
        <ul className="sidebar-icons-list">
          <li><Link to="/dashboard/chatroomscont" className="tooltip"><i className="fas fa-comments fa-1x"></i> <span className="tooltiptext">Chat Rooms</span></Link></li>
          <li><Link to="/dashboard/idiary" className="tooltip"><i className="fas fa-book fa-1x"></i> <span className="tooltiptext">iDiary</span></Link></li>
          <li><Link to="/dashboard/ireminder" className="tooltip"><i className="fas fa-business-time fa-1x"></i> <span className="tooltiptext">iReminder</span></Link></li>
          <li><Link to="/dashboard/isearch" className="tooltip"><i className="fas fa-search fa-1x"></i> <span className="tooltiptext">iSearch</span></Link></li>
          <li><Link to="/dashboard/settings" className="tooltip"><i className="fas fa-cog fa-1x"></i> <span className="tooltiptext">Settings</span></Link></li>
          <li><Link to="/" className="tooltip"><i className="fas fa-reply-all fa-1x"></i> <span className="tooltiptext">Log Out</span></Link></li>
          
          {/* <li id="admin-panel-container"></li> */}
        </ul>
      </div>
    </div>
  )
}


export default SideBar;