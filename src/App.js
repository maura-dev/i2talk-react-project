import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/layout/footer';
// import Header from './components/layout/header';
import Main from './components/pages/main';
import Feature from './components/pages/features';
import ContactUs from './components/pages/ContactUs';
import Faq from './components/pages/faq';
import Exercise from './components/pages/Exercise';
import Dashboard from './components/dashboard/Dashboard';
import Logout from './components/dashboard/Logout';
import Auth from './components/pages/Auth'
import Activation from './components/pages/activation'
// stylesheets
// import 'bootstrap/dist/css/bootstrap.min.css';
//import ProtectedRoute from './protectedRoute'
class App extends Component {
	
	render(){
		
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/features" component={Feature} />
						<Route exact path="/contact" component={ContactUs} />
						<Route exact path="/faqs" component={Faq} />
						<Route exact path="/exercise" component={Exercise} />
						<Route path="/dashboard" component={Dashboard} />
						<Route exact path="/auth" component={Auth} />
						<Route exact path="/activation/:token" component={Activation} />
						<Route exact path="/logout" component={Logout} />
					</Switch>
				</div>
			</Router>
		);
	}
}

  



export default App;
