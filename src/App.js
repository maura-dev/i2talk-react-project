import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Footer from './components/layout/footer';
// import Header from './components/layout/header';
import Main from './components/pages/main';
import Feature from './components/pages/features';
import ContactUs from './components/pages/ContactUs';
import Faq from './components/pages/faq';
import Dashboard from './components/dashboard/Dashboard';

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
						<Route path="/dashboard" component={Dashboard} />
						
					</Switch>
				</div>
			</Router>
		);
	}
}

  



export default App;
