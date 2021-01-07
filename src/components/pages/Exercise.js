import React, { Component } from 'react';

class Exercise extends Component {
  state = {
    menu: false
  }
  
  render(){
    let weekday = ["Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"]
    // [new Date().getDay()];

    const { menu } = this.state;

    return (
      <div>
        <div style={{ background: '#fff' }}>
          <h4 onClick={() => this.setState ({
            menu: !this.state.menu})
          } >
            Today is {weekday[new Date().getDay()]} 
          </h4>
          <div>
            <p>{new Date().getDay()}</p>
            <p>{new Date().getMonth()+1}</p>
            <p>{new Date().getHours()}</p>
          </div>

          {/* {menu ? (<div>
            <p>{new Date().getDay()}</p>
            <p>{new Date().getMonth()+1}</p>
            <p>{new Date().getHours()}</p>
          </div>) : null} */}
          
        </div>

        <div style={{ background: '#fff' }}>
          <h4 onClick={() => this.setState ({
            menu: !this.state.menu
          })
          }>
            Today is {weekday[new Date().getDay()]} 
          </h4>

          <div className = { menu? "show": "hide" }>
            <p>{new Date().getDay()}</p>
            <p>{new Date().getMonth()+1}</p>
            <p>{new Date().getHours()}</p>
          </div>


        </div>
      </div>
      

      

    )
  }
  
}

export default Exercise;