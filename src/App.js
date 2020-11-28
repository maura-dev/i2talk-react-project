import React, { Component } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Feature from './components/features'
class App extends Component{

  render() {

    return (
    	<Router>
	      <div className="App">
	        <Header/>
	        <Switch>
	        	<Route exact path="/" component={Main}/>
	        	<Route exact path="/features" component={Feature}/>
	        </Switch>
	        <Footer/>
	      </div>
      </Router>
    );
  }
}

  



export default App;
