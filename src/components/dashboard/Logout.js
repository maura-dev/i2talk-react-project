import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const Logout = () => {

  const [loggedOut, setLoggedOut] = useState(false)

  const logout = () => {
    localStorage.clear("loggedUserDetail");
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <Redirect to="/" push={true} />
  }

  return (
    <span className="tooltip" onClick={logout}>
      <i className="fas fa-reply-all fa-1x"></i> <span className="tooltiptext">Log Out</span>
    </span>
  );
};

export default Logout;

