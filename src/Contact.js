import React from 'react';
import NavigationComponent from './Navigation';
import ContactTableComponent from './ContactTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './css/contact.css';

function ContactComponent() {
	return (
		<div>
		<NavigationComponent/>
		<div className='contact'>
			<div className = "getInTouch">
					<h1>Contact us</h1>
					<p>Found something interesting?</p> 
					<p>Or need an advice?</p> 
					<p>Here's how to reach us: </p>
					<p><FontAwesomeIcon icon={faPhone} /><a href="mailto:lacasa@casa.com">  lacasa@casa.com</a></p>
					<p><FontAwesomeIcon icon={faEnvelope} /><a href="tel:+1800123456">  1 800 123456</a></p>
			</div>
			<ContactTableComponent/>
			<div className="contactButtonDiv"><button className="contactButton">Send</button></div>
		</div>
		</div>
		);
}

export default ContactComponent;