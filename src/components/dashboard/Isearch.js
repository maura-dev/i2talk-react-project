import React, { Component } from 'react';
import ChatMenu from './ChatMenu';
import Headers from './dashboardComponents/headers';
import axios from 'axios';
import { Link } from 'react-router-dom'

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

class Isearch extends Component {

  state={
    loading:false,
    search:"",
    searchResults:[],
    number:"",
    latitude: "",
    longitude: ""
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
      alert(error);
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
      //alert(JSON.stringify(response.data.data))
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
      number:"" ,
    });

    const accessToken = localStorage.getItem("bearerToken")

    const geolocationSearch = () => { 
      const success = (pos) => {
        var crd = pos.coords;
        var data={
          "latitude": crd.latitude,
          "longitude": crd.longitude,
          "kilometer": ""
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
            const result=response.data.result;
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
      }
      
      function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              console.log(result.state);
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(success);
            
            } else if (result.state === "prompt") {
              navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        alert("Sorry Not available!");
      }
    }
    geolocationSearch();
    // this.setState({
    //     loading:false 
    //   });  
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
                        <div><img src={user.picture} alt="user pics" width="100px" height="100px" /></div>
                          <div>
                            <h3> {user.fullName} </h3>
                            <p>@{user.username}</p>
                            <h4>{user.state}, Nigeria</h4>
                          </div>
                          <div className= "searchResults-btn">
                            <button className="pmsg-btn" ><i className="fas fa-user-circle"></i></button>
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