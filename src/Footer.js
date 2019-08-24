import React from 'react';
import './css/footer.css';

function FooterComponent() {
	return (
		<div className='footer'>
			
			<div>
				<ul>
					<li>About</li>  
					<li>Support</li>
					<li>Terms</li>
					<li>Policy</li>
					<li>Contact</li> 
				</ul>
			</div>
			
			<div>
				<ul>
					<li>Appartements</li>  
					<li>Houses</li>
					<li>Villas</li>
					<li>Mansions</li>
					<li>...</li> 
				</ul>
			</div>
			
			<div>
				<ul>
					<li>New York</li>  
					<li>Los Angeles</li>
					<li>Miami</li>
					<li>Washington</li>
					<li>...</li> 
				</ul>
			</div>
			
			<div className="footertext">LaCasa is a minimal html-template website, designed and coded dy Hristina Dakic, student @ CodeFactory Vienna.</div>
			
			<div className="copyright">Copyright &copy; 2019 Hristina Dakic. CodeFactory.</div>

		</div>
		);
}

export default FooterComponent;