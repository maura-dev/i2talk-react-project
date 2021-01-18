import React, { Component } from 'react';
//import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import swal from '@sweetalert/with-react';

// import image components
//import DummyDp from '../../img/users/male.png';
class Profile extends Component {

  state={
    loading:false
  }

  /*function readURL(){
    file = document.getElementById("getval").files[0];
    reader = new FileReader();
    reader.onloadend = function(){
    document.getElementById('profile-image-box').style.backgroundImage = "url(" + reader.result + ")";
    document.getElementById('imga').style.display ="none"   
    document.getElementById("getval").style.display ="none"
    document.getElementById("fa-upload").style.display ="none"
    }
    if(file){
        reader.readAsDataURL(file);
        alert(reader.result)
    }else{
  }
}
*/

/*handlePictureSelect=(e)=>{
  var pic=e.target.files[0]
  var src=URL.createObjectURL(pic)
  alert(src)
}
submitProfile=()=>{
  //document.getElementById('getval') 
  var data= new FormData();
  //var fs= new FileStream()
  data.append("username", document.getElementById("username-input").value)
  data.append("email", document.getElementById("email-input").value)
  data.append("bio", document.getElementById("bio-input").value)
  data.append("profile-picture", fs.createReadStream())
  data.append("phone", document.getElementById("phone-input").value)
  data.append("sex", document.getElementById("sex-input").value)
  data.append("location", document.getElementById("location-input").value)

}
*/
  
  render() {

   const loggedUserDetails = JSON.parse(localStorage.getItem("loggedUserDetails"))

    if(loggedUserDetails.bio===""){
      loggedUserDetails.bio= "Hi, I'm new to the i2talk chatting platform"
    }
     
  const displayPic = loggedUserDetails.picture;
  const { loading }= this.state

    return (
      

        <div className="chat-message-container" id="user-msg-container">
        
          <div className= "dashboard-feature-container">
            <Headers 
              text="My Profile"
              img = {null}
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
                {/*<img id="imga" src={loggedUserDetails.picture.bind(this)} />
                <input type="file" 
                name="logo" 
                id='getval' 
                className="upload w180" 
                title="Dimensions 180 X 180" 
                id="imag"
                onChange={this.handlePictureSelect} />
                 <i id="fa-upload" class="fa fa-upload fa-5x"></i>
              */}
              </div>

              <hr/>
              
              <br/>
              <p>Username</p>
              <input type="text" placeholder="Enter your username" id="username-input" value={loggedUserDetails.username} required />
              <br/>
              <hr/>

              <br/>
              <p>Email</p>
              <input type="email" placeholder="Enter your email" id="email-input" value={loggedUserDetails.email} required />
              <br/>
              <hr/>

              <br/>
              <p>Bio</p>
              <input type="text" placeholder="Enter your bio" id="bio-input" value={loggedUserDetails.bio} required />
              <br/>
              <hr/>

              <br/>
              <p>Phone number</p>
              <input type="text" placeholder="Enter your number" id="number-input" value={loggedUserDetails.phone} required />
              <br/>
              <hr/>

              <br/>
              <p>Sex</p>
                <select id="sex-input" required>
                  <option value="none" disabled selected>-- Select Sex --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              <br/>
              <hr/>

              <br/>
              <p>Location</p>
                <select id="location-input" required>
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