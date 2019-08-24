import React from 'react';
import NavigationComponent from './Navigation';
import ListingsComponent from './Listings';
import SearchComponent from './Search';
import rentImg from './img/rent.jpeg';

var imgStyle = {
	backgroundImage: `url(${rentImg})`,
	backgroundSize: "100%"
}

function RentComponent() {
	return (
		<div className='rent'>
			<div className='hero' style={imgStyle}>
				<NavigationComponent/>
				<div className='title'>
					<h1>Rent Your Deam Home</h1>
					<h4>Appartements-Houses-Mansions</h4>
				</div>
			</div>
			<SearchComponent/>
			<ListingsComponent/>
		</div>
		);
}

export default RentComponent;