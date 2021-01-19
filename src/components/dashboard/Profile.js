import React, { Component } from 'react';
//import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import swal from '@sweetalert/with-react';
import axios from 'axios'
class Profile extends Component {

  state={
    loading:false,
    file:null,
    fullName:"",
    bio:"",
    state:""
  }

  componentDidMount(){
    const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"))

     if(loggedUserDetails.bio===""){
      loggedUserDetails.bio= "Hi, I'm new to the i2talk chatting platform"
    }

    this.setState({
      ...this.state,
      fullName:loggedUserDetails.fullName,
      bio:loggedUserDetails.bio,
      state:loggedUserDetails.state
    });

}

handlePictureSelect=(e)=>{
  this.setState({
    ...this.state,
    file:e.target.files[0]
  });
}

onChange=(e)=>{
  this.setState({
      [e.target.name]: [e.target.value]
  });
}
  
submitProfile=(e)=>{
  e.preventDefault()
  this.setState({
      loading:true 
  });

 const { fullName, bio,state, file  }= this.state 
 //alert(JSON.stringify(this.state))
 const accessToken=localStorage.getItem("bearerToken")
  var data= new FormData();
 
  data.append("fullName", fullName)
  data.append("bio", bio)
  data.append("profile-picture",file )
  data.append("state",state )

  var config = {
      method: 'put',
      url: 'https://i2talk.live/api/users/editProfile',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'multipart/form-data'
      },
      data : data
    };

    axios(config)
    .then(async (response)=> {
      this.setState({
          loading:false 
      });
      swal("Yayy!", "Profile updated successfully", "success")

    })
    .catch(async (error)=> {
      var errMsg = "Request failed with status code";
      if (error.message === `${errMsg} 401`){
        swal("Cannot process your request... Please try again.")
      } else {
        swal("Please hold on... Try again after a few moments.")
      }
      await this.setState({
        loading:false 
      });
    });

}

  
  render() {
  const loggedUserDetails= JSON.parse(localStorage.getItem("loggedUserDetails"))
  const displayPic = loggedUserDetails.picture;
  const { loading, fullName, bio, state } =this.state

    return (
      

        <div className="chat-message-container" id="user-msg-container">
        
          <div className= "dashboard-feature-container">
            <Headers 
              text="My Profile"
              img = {displayPic}
              display = "hide"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = {null}
              report = {null}  
            />
            <div className="user-profile-details scrollbar" id="style-2"> <br />
              <span style={{fontSize:"30px", color:"#03045e"}} onClick={()=> this.props.history.goBack()}>
                <i className="fas fa-reply-all fa-1x"></i>
              </span>
              <div id="profile-image-box">
                <img src={displayPic} alt="profile" />
                <input type="file" 
                name="logo" 
                id='getval' 
                className="upload w180" 
                title="Dimensions 180 X 180" 
                onChange={this.handlePictureSelect} required />
                 <i id="fa-upload" className="fa fa-upload fa-5x"></i>
              </div>

              <hr/>
              
              <br/>
              <p>Full Name</p>
              <input type="text"
              name="fullName" 
              placeholder="Enter your full name" 
              value={fullName}
              onChange={this.onChange} 
              required />
              <br/>
              <hr/>

              <br/>
              <p>Bio</p>
              <input type="text" 
              name="bio"
              placeholder="Enter your bio" 
              value={bio} 
              onChange={this.onChange} 
              required />
              <br/>
              <hr/>

              <br/>
              <p>Location</p>
                <select name="state" onChange={this.onChange} value={state} required>
                  <option value="none" disabled selected>--Select State--</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Abuja">Abuja (FCT)</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
              <br />
              <hr />
            
              <button id="submit-profile-btn" onClick={this.submitProfile}>
              {loading ? (<i className="fa fa-spinner fa-spin"></i>) : "Submit Changes"}
              </button>
            
        </div>
          </div>
        </div>
    )
  }
}

export default Profile;