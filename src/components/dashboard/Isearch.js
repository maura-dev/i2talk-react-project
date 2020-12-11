import React, { Component } from 'react'
import Headers from './dashboardComponents/headers'
class Isearch extends Component {
  render() {
    return (
      <div className="dashboard-feature-container" id="user-iSearch-page">
          <Headers text="iSearch" />
          
          <p id="iSearch-header">Search for Users by Location</p>
          <form id="iSearch-form" action="#">
            <input id="iSearchInput" type="text" placeholder="Type location here e.g Lagos" required />
            <button>Search</button> 
          </form>
          <button id="isearch-geolocation">Search Nearby Users</button>
          <div className="scrollbar" id="iSearch-result"></div>
      </div>
    )
  }
}


export default Isearch;