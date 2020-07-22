import React from 'react';
import NavigationComponent from './Navigation';
import ListingsComponent from './Listings';
import SearchComponent from './Search';
import homeImg from './img/home.jpeg';
import './css/home.css';

var imgStyle = {
	backgroundImage: `url(${homeImg})`,
	backgroundSize: "100%"
}

function HomeComponent() {
	return (
		<div className='home'>
			<div className='hero' style={imgStyle}>
			    <NavigationComponent/>
				<div className='title'>
					<h1>Find Your Dream Home</h1>
					<h4>Appartements-Houses-Mansions</h4>
				</div>
			</div>
			<SearchComponent/>
			<ListingsComponent/>
		</div>
	);
}

export default HomeComponent;