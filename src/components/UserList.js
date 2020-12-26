import React, { Component } from 'react';
import { connect } from 'react-redux';
import users from '../reducers/usersReducer';

class UserList extends Component {
  render() {
    const { username, password } = this.props.users;
    return (
      <div>
        <div>
          <h4>Users</h4>
          <ul>
            {console.log(this.props.users)}
            {this.props.users.map((user, index) =>{
              return <li key={index}> {user.firstname} {user.lastname} {user.email} {user.username} {user.password} </li>
            })}
          </ul>
        </div>

        <div>
          <h4>Login</h4>
          <ul>
            {console.log(this.props.users)}
            {this.props.users.map((user, index) =>{
              return <li key={index}> {user.username} {user.password} </li>
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.Users.users,
    users: state.UserLogin.users
  }
}

export default connect(mapStateToProps, null)(UserList);