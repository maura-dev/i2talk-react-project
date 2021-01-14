import React from 'react';
// import react router link 
import { Link } from 'react-router-dom';

import '../../App.css';
import '../../styles/footer.css';

function Footer () {
	return(
		<footer>
			<div className="footer-row">
				<div className="footer-box">
					<h4><span>OUR COMPANY</span></h4>
						<ul>
							<li><Link to="/features">About Us</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
							<li><Link to="/security&privacy">Security &amp; Privacy</Link></li>
						</ul>
				</div>

				<div className="footer-box">
					<h4><span>PRODUCTS</span></h4>
						<ul>
							<li><Link to="/features">Explore</Link></li>
							<li><Link to="/terms">Terms of Service</Link></li>
							<li><Link to="/contact">Help Center</Link></li>
						</ul>
				</div>
				
				<div className="footer-box">
					<h4><span>QUICKLINKS</span></h4>
						<ul>
							<li><Link to="/features">Features</Link></li>
							<li><Link to="/faqs">FAQs</Link></li>
							<li><Link to="/contact">Help</Link></li>
						</ul>
				</div>
				
			</div>		
			<div className="footer-bar"><p>i2talk &copy; 2021, All Rights Reserved.</p></div>
		</footer>

	)
	
}

export default Footer;
//this component contains the footer
