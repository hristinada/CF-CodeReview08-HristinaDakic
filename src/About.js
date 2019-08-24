import React from 'react';
import NavigationComponent from './Navigation';
import './css/about.css';

function AboutComponent() {
	return (
		<div>
		<NavigationComponent/>
		<div className='about'>
			<h1>About us</h1>
			<p>We offer a wide variety of services around real estate, to meet your every demand, and to give you the power to make informed decisions. Whether you would like to manage your own let, rent, buy or sale, or would like to let us handle things for you, we can design it as you wish. With our hands-on approach, we will always put your vision first. Our aim is to take all possible stress out of the process of relocating. Throughout the process we will do what we are good at, so you get to keep doing what you are good at.</p>
			<p>We want to be the best in listening to our customers, to fully understand their essentials and their wishes, to be able to deliver a personal and professional service, at all times.</p>
		</div>
		</div>
		);
}

export default AboutComponent;