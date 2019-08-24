import React from 'react';
import NavigationComponent from './Navigation';
import ListingsComponent from './Listings';
import SearchComponent from './Search';
import buyImg from './img/buy.jpeg';

var imgStyle = {
	backgroundImage: `url(${buyImg})`,
	backgroundSize: "100%"
}

function BuyComponent() {
	return (
		<div className='buy'>
			<div className='hero' style={imgStyle}>
				<NavigationComponent/>
				<div className='title'>
					<h1>Buy Your Deam Home</h1>
					<h4>Appartements-Houses-Mansions</h4>
				</div>
			</div>
			<SearchComponent/>
			<ListingsComponent/>
		</div>
	);
}

export default BuyComponent;