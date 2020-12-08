import React, { Component } from 'react'

class Isearch extends Component {
  render() {
    return (
      <div class="iSearch-page" id="user-iSearch-page">
      
        <div id="iSearch-top">
          <a class="message-back-arrow" onclick="backToMenu('user-chat-menu', 'user-msg-container')"><i class="fas fa-long-arrow-alt-left"></i></a>
          <p>iSearch</p>
        </div>
        <p id="iSearch-header">Search for Users by Location</p>
        <form id="iSearch-form" action="#">
          <input id="iSearchInput" type="text" placeholder="Type location here e.g Lagos" required />
          <button>Search</button> 
        </form>
        <button id="isearch-geolocation">Search Nearby Users</button>
        <div class="scrollbar" id="iSearch-result"></div>
      </div>
    )
  }
}


export default Isearch;