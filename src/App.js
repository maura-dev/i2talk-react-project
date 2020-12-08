import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import Main from './components/pages/main';
import Feature from './components/pages/features';
import ContactUs from './components/pages/ContactUs';
import Faq from './components/pages/faq';

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className="App">
				<Header/>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route exact path="/features" component={Feature} />
					<Route exact path="/contact" component={ContactUs} />
					<Route exact path="/faqs" component={Faq} />
				</Switch>
				<Footer/>
			</div>
		</Router>
	);
}

  



export default App;
