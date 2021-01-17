import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Logout extends Component {
  state={
    navigate: false
  };

  logout = () => {
    localStorage.clear("bearerToken");
    this.setState({navigate:true});
  }
  render() {
    const { navigate } = this.state;

    if (navigate){
      return <Redirect to="/" push={true} />
    }

    return (
      <span className="tooltip" onClick={this.logout}>
        <i className="fas fa-reply-all fa-1x"></i> <span className="tooltiptext">Log Out</span>
      </span>
    )
  }
}
