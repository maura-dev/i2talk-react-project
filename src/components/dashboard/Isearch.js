import React, { Component } from 'react';
//import { Formik, Form, Field, ErrorMessage  } from 'formik';
//import * as Yup from 'yup';
//import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { Link } from 'react-router-dom'
//import Button1 from './dashboardComponents/button1'
//import Button2 from './dashboardComponents/button2';

class Isearch extends Component {

  state={
    loading:false,
    search:"",
    searchResults:[],
    number:""
  }


  usersearch=()=>{
    document.getElementById("isearch-steps").style.display="none"
    const accessToken=localStorage.getItem("bearerToken")
    const{ search }= this.state
    this.setState({
      loading:true,
      searchResults:[],
      number:"" 
    });

    var data = {
      "username_phone": search
    };

    var config = {
      method: 'post',
      url: 'https://i2talk.live/api/isearch/username-phone',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      data : data
    };

    axios(config)
    .then(async (response)=> {
      const result=response.data.data;
      await this.setState({
        loading:false,
        searchResults:result,
        number: `${result.length} user(s) found`
      });
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

  locationsearch=()=>{
    document.getElementById("isearch-steps").style.display="none"
    this.setState({
      loading:true,
      searchResults:[],
      number:"" 
    });

    const accessToken=localStorage.getItem("bearerToken")
    const{ search }= this.state

    var data = {
      "location": search,
      "kilometer": 200
    };

    var config = {
      method: 'post',
      url: 'https://i2talk.live/api/isearch/location',
      headers: {
        'Authorization': `Bearer ${accessToken}`
       },
      data : data
    };

    axios(config)
    .then(async (response)=> {
      const result=response.data.data;

      await this.setState({
        loading:false,
        searchResults:result,
        number:`${result.length} user(s) found` 
      });

    })
    .catch(function (error) {
      console.log(error);
    });
  }

  phonesearch=()=>{
    document.getElementById("isearch-steps").style.display="none"
    const accessToken=localStorage.getItem("bearerToken")
    const{ search }= this.state
    this.setState({
      loading:true,
      searchResults:[],
      number:"" 
    });

    var data = {
      "username_phone": search
    };

    var config = {
      method: 'post',
      url: 'https://i2talk.live/api/isearch/username-phone',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
      data : data
    };

    axios(config)
    .then(async (response)=> {
      const result=response.data.data;
      await this.setState({
        loading:false,
        searchResults:result,
        number: `${result.length} user(s) found`
      });
    })
    .catch(async (error)=> {
      if(error==="Error: Request failed with status code 404"){
        document.getElementById("isearch-steps").innerHTML="<h3>No user found matching the credentials provided!</h3>"
      }
      else{
        alert(error)
      }
      await this.setState({
        loading:false 
      });
    });

  }

onChange=(e)=>{
    
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  


  render() {
    const {loading, search,number, searchResults}= this.state


    return (

        <div className="chat-message-container" id="user-msg-container">
          <div className="dashboard-feature-container" id="user-iSearch-page">
            <Headers 
              text="iSearch"
              img = {null} 
              display = "hide"
              leave = {null} 
              view = {null}
              mute = {null} 
              search = {null}
              report = {null} 
            />
            
            <p id="iSearch-header">Search for Users</p>

            <input className="searchInput isearch-input" 
            name="search"
            type="text" 
            placeholder="Type something here ...." 
            onChange={this.onChange}
            value={search} required />
          
            <div className="isearch-btns">
              <p className="search-btn" onClick={this.usersearch}>Username</p>
              <p className="search-btn" onClick={this.locationsearch}>Location</p>
              <p className="search-btn" onClick={this.phonesearch}>Phone Number</p>
            </div>

            <div className="scrollbar" id="iSearch-result">

                <div id="isearch-steps" style={{display:"block", padding:"20px", border:"2px solid var(--primary-color)",margin:"5% 20% 5% 20%"}}>

                  <br /><h3>Steps to effectively search for a user</h3><br />
                  <p>1. Type in the complete username, phone or location of your user preference </p><br />
                  <p>2. Click the bar that corresponds to your search option</p><br />
                  <p>3. You can then view the profile and message a user that interests you.</p><br />
    
                </div>
                {loading ?  
                  (<i className="fa fa-spinner fa-spin" 
                    style={{fontSize:"50px", margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}>
                  </i>) :
                (<React.Fragment>
                  <h3 style={{padding:"10px", textAlign:"center"}}>{number}</h3>
                  {searchResults.map(user=>(     
                    <div className="ireminder-item" key={user.id}>
                        <div className="ireminder-msg searchResults-msg">
                          <div><img src={user.picture} alt="user pics" width="100px" height="100px" /></div>
                          <div> 
                            <h3> {user.fullName} </h3>
                            <p>@{user.username}</p>
                            <h4>{user.state}, Nigeria</h4>
                          </div>
                          <div className= "searchResults-btn">
                            <Link to={`/dashboard/searchprofile/${user.username}`}><button className="pmsg-btn" ><i className="fas fa-user-circle"></i></button></Link>
                            <Link to={`/dashboard/directmsg/${user.username}`}><button className="pmsg-btn"><i className="far fa-paper-plane"></i></button></Link>
                          </div>
                        </div>
                    </div>)
                  )}
                </React.Fragment>)}
                
            </div>
          </div>
        </div>
    )
  }
}


export default Isearch;