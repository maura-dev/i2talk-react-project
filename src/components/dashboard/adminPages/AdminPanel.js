import React, { Component } from 'react';
import StatCard from './StatCard';

import '../../../styles/admin.css'

class AdminPanel extends Component {
  render() {
    return (
      <div className="chat-container">
        <section id="admin-head">

        </section>
        <section className="admin-body scrollbar" id="admin-panel-body">
          <div className="admin-container">

            <StatCard />

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

            <div className="admin-dashboard-box">
              <div className="admin-livechat1 admin-dashboard-box-body2">
                <i className="far fa-comment-dots dash-icon"></i>
                <h2>10</h2>
                <p>Active Live Chats</p>
              </div>
              <div className="admin-dashboard-box-foot">
                <a href="">View details </a>
                <a onclick="reveal('admin-livechat-active')"><i className="fas fa-angle-down"></i></a>
              </div>
              <div className="admin-dashboard-details" id="admin-livechat-active">
                <div className="livechat-list">
                  <div className="livechat-img">
                    <img src="./users/deven.jpg" alt=""/>
                  </div>
                  <div className="livechat-msg">
                    <h5>Lex Luthor</h5>
                    <p>I don't know if...</p>
                  </div>
                  <div className="livechat-date">
                    <span>3:30pm</span>
                  </div>
                </div>
                <div className="livechat-list">
                    <div className="livechat-img">
                        <img src="./users/user4.png" alt=""/>
                    </div>
                    <div className="livechat-msg">
                        <h5>Karl Max</h5>
                        <p>Can you make...</p>
                    </div>
                    <div className="livechat-date">
                        <span>5:00pm</span>
                    </div>
                </div>
                <div className="livechat-list">
                  <div className="livechat-img">
                    <img src="./users/mira.jfif" alt=""/>
                  </div>
                  <div className="livechat-msg">
                    <h5>Van Gogh</h5>
                    <p>Can I get perm...</p>
                  </div>
                  <div className="livechat-date">
                    <span>5:15pm</span>
                  </div>
                </div>
                <div className="livechat-list">
                  <div className="livechat-img">
                    <img src="./users/Kristina.jpg" alt=""/>
                  </div>
                  <div className="livechat-msg">
                    <h5>Florence Chris</h5>
                    <p>I need your help!</p>
                  </div>
                  <div className="livechat-date">
                    <span>5:30pm</span>
                  </div>
                </div>
                <div className="admin-users-viewmore">View more chats...</div>
              </div>
            </div>

            <div className="admin-dashboard-box">
              <div className="admin-support1 admin-dashboard-box-body2">
                  <i className="fas fa-clipboard-list dash-icon"></i>
                  <i></i>
                  <h2>12</h2>
                  <p>Open Support Tickets</p>
              </div>
              <div className="admin-dashboard-box-foot">
                  <a href="">View details</a>
                  <a onclick="reveal('admin-support-ticket')"><i className="fas fa-angle-down"></i></a>
              </div>
              <div className="admin-dashboard-details" id="admin-support-ticket">
                <div className="admin-user-search">
                  <a href="">Flag Reported Post</a>
                  <a onclick="reveal('admin-support-ticket1')"><i className="fas fa-ellipsis-v"></i></a>
                  <div className="admin-user-function" id="admin-support-ticket1">
                    <p>Mark "in progress"</p>
                    <p>Mark "done"</p>
                    <p>Delete ticket</p>
                  </div>
                </div>
                <div className="admin-user-search">
                  <a href="">Create "Hairstyles" chatroom</a>
                  <a onclick="reveal('admin-support-ticket2')"><i className="fas fa-ellipsis-v"></i></a>
                  <div className="admin-user-function" id="admin-support-ticket2">
                    <p>Mark "in progress"</p>
                    <p>Mark "done"</p>
                    <p>Delete ticket</p>
                  </div>
                </div>
                <div className="admin-user-search">
                  <a href="">Disable User Account</a>
                  <a onclick="reveal('admin-support-ticket3')"><i className="fas fa-ellipsis-v"></i></a>
                  <div className="admin-user-function" id="admin-support-ticket3">
                    <p>Mark "in progress"</p>
                    <p>Mark "done"</p>
                    <p>Delete ticket</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="admin-activities">
            <h3>Admin activities</h3>
            <div className="timeline">
                <div className="timeline__group">
                    <span className="timeline__year">October, 2020</span>
                    <div className="timeline__box">
                        <div className="timeline__date">
                          <p>4, Sunday</p>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Suspended user account due to violation of i2talk policies.</p>
                                <span>- Oyetunji</span>
                            </div>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Created "Psychology and mental health"chatroom.</p>
                                <span>- Maureen</span>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__box">
                        <div className="timeline__date">
                            <p>2, Friday</p>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Edited "Football" chatroom details.</p>
                                <span>- Oyetunji</span>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__box">
                        <div className="timeline__date">
                            <p>1, Thursday</p>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Disabled 1 user account as requested.</p>
                                <span>- Rasheed</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline__group">
                    <span className="timeline__year">September, 2020</span>
                    <div className="timeline__box">
                        <div className="timeline__date">
                            <p>3, Wednesday</p>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Created "Nigerian Weddings and Fashion" chatroom</p>
                                <span>- Rasheed</span>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__box">
                        <div className="timeline__date">
                            <p>8, Monday</p>
                        </div>
                        <div className="timeline__post">
                            <div className="timeline__content">
                                <p>Edited "Science History and Facts" chatroom details.</p>
                                <span>- Johnson</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline__group">
                    <span className="timeline__year">August, 2020</span>
                    <div className="timeline__box">
                        <div className="timeline__date">
                            <p>1, Wednesday</p>
                        </div>
                        <div className="timeline__post">
                        <div className="timeline__content">
                            <p>Suspended user account due to violation of i2talk policies.</p>
                            <span>- Johnson</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="timeline__group">
                    <span className="timeline__year">view more...</span>
                </div>
            </div>
          </div>

          <div className="admin-chathistory">
            <div className="livechat-head">
              <h3>Live Support Chat History</h3>
              <a onclick="reveal('admin-livechat-list')"><i className="fas fa-angle-down"></i></a>
            </div>
            <div className="livechat-body" id="admin-livechat-list">
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/user3.png" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Clark Kent</h5>
                      <p>Thank you for your...</p>
                  </div>
                  <div className="livechat-date">
                      <span>03/10/2020</span>
                  </div>
              </div>
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/user7.jpg" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Sansa Stark</h5>
                      <p>It works now, thanks.</p>
                  </div>
                  <div className="livechat-date">
                      <span>03/10/2020</span>
                  </div>
              </div>
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/deven.jpg" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Lex Luthor</h5>
                      <p>I hope this helps.</p>
                  </div>
                  <div className="livechat-date">
                      <span>01/10/2020</span>
                  </div>
              </div>
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/user4.png" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Karl Max</h5>
                      <p>Check out the iDiary...</p>
                  </div>
                  <div className="livechat-date">
                      <span>01/10/2020</span>
                  </div>
              </div>
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/mira.jfif" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Van Gogh</h5>
                      <p>Thank you for your...</p>
                  </div>
                  <div className="livechat-date">
                      <span>30/09/2020</span>
                  </div>
              </div>
              <div className="livechat-list">
                  <div className="livechat-img">
                      <img src="./users/Kristina.jpg" alt=""/>
                  </div>
                  <div className="livechat-msg">
                      <h5>Florence Nightingale</h5>
                      <p>I'll check it out!</p>
                  </div>
                  <div className="livechat-date">
                      <span>29/09/2020</span>
                  </div>
              </div>
              <div className="livechat-end"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}


export default AdminPanel;