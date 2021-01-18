import React, { Component } from 'react';
//import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import axios from 'axios'
import Button2 from './dashboardComponents/button2'
// import image components
//import DummyDp from '../../img/users/male.png';
class SearchProfile extends Component {

  async componentDidMount(){
    const {receiver}= this.props.match.params
    var bearerToken= localStorage.getItem("bearerToken")

      var config = {
        method: 'get',
        url: `https://i2talk.live/api/users/username/${receiver}`,
        headers: {
          'Authorization': `Bearer ${bearerToken}` 
        }
      };

      await axios(config)
      .then(  (response)=> {
         const result = response.data
         //alert(result.picture)  

        if(result.bio===""){
          result.bio= "Hi, I'm new to the i2talk chatting platform"
        }
        document.getElementById("dp").src= result.picture
        document.getElementById("profile-fullname-input").value=result.fullName
        document.getElementById("profile-username-input").value=result.username
        document.getElementById("profile-bio-input").value=result.bio
        document.getElementById("profile-sex-input").value=result.sex
        document.getElementById("profile-number-input").value=result.phone
        document.getElementById("profile-location-input").value=result.state
    })
    .catch(function (error) {
        alert(error);
      });
  }
  render() {
    //const displayPic = result.picture;
    const {receiver}= this.props.match.params

    return (

        <div className="chat-message-container" id="user-msg-container">
        
          <div className= "dashboard-feature-container">
            <Headers 
              text={`Profile of ${receiver}`}
              img = {null}
              display = "hide"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = {null}
              report = {null}  
            />
            
            <div className="user-profile-details scrollbar" id="style-2">
            <br/>
            <Button2 onClick={()=>this.props.history.goBack()} text="Back to isearch" />
              <div id="profile-image-boxer">
                {/*<img src={DummyDp} alt="Profile" />*/}
                <img src="" alt="Profile" id="dp"/> 
              </div>
              <p>Full Name</p>
              <input type="text" id="profile-fullname-input" disabled="disabled" />
              <br />
              <hr />
              <p>Username</p>
              <input type="text" id="profile-username-input" disabled="disabled" />
              <br />
              <hr />
              <p>Bio</p>
              <input type="text" id="profile-bio-input" disabled="disabled" />
              <br />
              <hr />
              <p>Phone number</p>
              <input type="text" id="profile-number-input" disabled="disabled" />
              <br />
              <hr />
              <p>Sex</p>
              <input type="text" id="profile-sex-input" disabled="disabled" />	
              <br />
              <hr />
              <p>Location</p>
              <input type="text" id="profile-location-input" disabled="disabled" />
            </div>
          </div>
        </div>

    )
  }
}

export default SearchProfile;