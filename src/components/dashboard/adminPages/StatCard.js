import React, { Component } from 'react';

class StatCard extends Component {
  render() {
    return (
      <div className="admin-dashboard-box">
        <div className="admin-chatrooms1 admin-dashboard-box-body2">
          <i className="fas fa-map-marked-alt dash-icon"></i>
          <h2>20</h2>
          <p>Active Chatrooms</p>
        </div>
        <div className="admin-chatrooms2 admin-dashboard-box-foot">
          <a onclick="reveal('admin-chatroom-list')">View details </a>
          <a onclick="reveal('admin-chatroom-list')"><i className="fas fa-angle-down"></i></a>
        </div>
        <div className="admin-dashboard-details" id="admin-chatroom-list">
          <p>Create chat room <i className="fas fa-plus-circle"></i></p>
          <input type="search" name="user-search" id="" placeholder="search chatrooms..."/>
          <button>search</button>
          <div className="admin-user-results">
            <div className="admin-user-search">
              <a href="">Football</a>
              <a onclick="reveal('admin-chat-setting1')"><i className="fas fa-ellipsis-v"></i></a>
              <div className="admin-user-function" id="admin-chat-setting1">
                <p>Edit chat room details</p>
                <p>Delete chat room</p>
                <p>Assign chat room moderator</p>
              </div>
            </div>
            <div className="admin-user-search">
                <a href="">Politics</a>
                <a onclick="reveal('admin-chat-setting2')"><i className="fas fa-ellipsis-v"></i></a>
                <div className="admin-user-function" id="admin-chat-setting2">
                    <p>Edit chat room details</p>
                    <p>Delete chat room</p>
                    <p>Assign chat room moderator</p>
                </div>
            </div>
            <div className="admin-user-search">
                <a href="">Naija Gossip</a>
                <a onclick="reveal('admin-chat-setting3')"><i className="fas fa-ellipsis-v"></i></a>
                <div className="admin-user-function" id="admin-chat-setting3">
                    <p>Edit chat room details</p>
                    <p>Delete chat room</p>
                    <p>Assign chat room moderator</p>
                </div>
            </div>
            <div className="admin-user-search">
                <a href="">Love & Relationships</a>
                <a onclick="reveal('admin-chat-setting4')"><i className="fas fa-ellipsis-v"></i></a>
                <div className="admin-user-function" id="admin-chat-setting4">
                    <p>Edit chat room details</p>
                    <p>Delete chat room</p>
                    <p>Assign chat room moderator</p>
                </div>
            </div>
            <div className="admin-users-viewmore">View more chatrooms...</div>
          </div>
        </div>
      </div>
    )
  }
}

export default StatCard;