import React from 'react';
import NavigationComponent from './Navigation';
import CreateEntryComponent from './CreateEntry';
import sellImg from './img/sell.jpeg';
import './css/sell.css';


var imgStyle = {
	backgroundImage: `url(${sellImg})`,
	backgroundSize: "100%"
}

function SellComponent() {
	return (
		<div className='sell'>
			<div className='hero' style={imgStyle}>
				<NavigationComponent/>
				<div className='title'>
					<h1>Sell Your Property</h1>
					<h4>Use our services</h4>
				</div>
			</div>
			<CreateEntryComponent/ >
		</div>
		);
}

export default SellComponent;