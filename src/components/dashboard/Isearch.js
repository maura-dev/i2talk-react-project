import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import * as Yup from 'yup';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import axios from 'axios';
import swal from '@sweetalert/with-react';
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

  nearbysearch=()=>{
    this.setState({
      loading:true,
      searchResults:[],
      number:"" 
    });


    function geolocationSearch(){
      navigator.geolocation.getCurrentPosition(
        function (position){
          const accessToken=localStorage.getItem("bearerToken")
          var data={
          "latitude":position.coords.latitude,
          "longitude": position.coords.longitude,
          "kilometer":parseInt(position.coords.latitude * 110.574)
          }

          var config = {
            method: 'post',
            url: 'https://i2talk.live/api/isearch/geolocation',
            headers: {
              'Authorization': `Bearer ${accessToken}`
            },
            data : data
          };

          axios(config)
          .then(async (response) =>{
            const result=response.data.data;
            alert(JSON.stringify(response.data));
            await this.setState({
              loading:false,
              searchResults:result,
              number:`${result.length} user(s) found`  
            });
            //localStorage.removeItem("position")
          })
          .catch(function (error) {
            alert(error);
            // localStorage.removeItem("position")
          });
        },

        function (error) {
          // You can use this format to alert error message
          // var errMsg = "Request failed with status code";
          // let errAlert;
          // if (error.message === `${errMsg} 401`) {
          //   errAlert = swal("You denied Location Access. \n Allow Location Access to Find Nearby Users")
          // } else if (error.message === `${errMsg} 400`){
          //   errAlert =swal("Please hold on... Try again after a few moments.")
          // } else {
          //   errAlert = swal("Geolocation failed due to unknown error.")
          // }
          // return errAlert;
        }
      )
    }

    if("geolocation" in navigator) {
      geolocationSearch()        
    }

    else {
      swal({
        title: "Allow Location Access",
        text: "Allow location access to find nearby users",
        buttons: true,
        dangerMode: false,
      })
      .then((willShow) => {
        if (willShow) {
          geolocationSearch()
        }
        else{
          swal("You denied Location Access", "You need to allow location access to find nearby users", "error");
        }
      })
       // return
    }  

    this.setState({
      loading:false 
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
      <div className="chat-container">
        <ChatMenu />

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

            {/*<input type="text" 
              name="search" 
              placeholder="Search for users" 
              onChange={this.onChange} 
              className="searchInput" 
              value={search}/>*/}

            <input className="searchInput isearch-input" 
            name="search"
            type="text" 
            placeholder="Type location here e.g Lagos" 
            onChange={this.onChange}
            value={search} required />
          
            <div className="isearch-btns">
              <p className="search-btn" onClick={this.usersearch}>Username</p>
              <p className="search-btn" onClick={this.locationsearch}>Location</p>
              <p className="search-btn" onClick={this.nearbysearch}>Nearby users</p>
            </div>

            <div className="scrollbar" id="iSearch-result">
                {loading ?  
                  (<i className="fa fa-spinner fa-spin" 
                    style={{fontSize:"50px", margin:"20% 30% 20% 45%", color:"var(--primary-color)"}}>
                  </i>) :
                (<React.Fragment>
                  <h3 style={{padding:"10px", textAlign:"center"}}>{number}</h3>
                  {searchResults.map(user=>(     
                    <div className="ireminder-item" key={user.id}>
                        <div className="ireminder-msg searchResults-msg">
                          <div>
                            <h3> {user.fullName} </h3>
                            <p>@{user.username}</p>
                            <h4>{user.state}, Nigeria</h4>
                          </div>
                          <div className= "searchResults-btn">
                            <button className="pmsg-btn"><i className="fas fa-user-circle"></i></button>
                            <button className="pmsg-btn"><i className="far fa-paper-plane"></i></button>
                          </div>
                        </div>
                    </div>)
                  )}
                </React.Fragment>)}
                
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Isearch;