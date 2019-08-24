import React, { Component } from 'react';
import ListingData from './data/listings';

class ListingsComponent extends Component {

	render() {
		return (
		<div className='listings'> 
			{ListingData.map((listingDetail, index)=>{
				return (
					<div className="listing" key={listingDetail.id}>
						<img alt="" src={listingDetail.img}/>
						<p>{listingDetail.title}</p>
						<p>Size: {listingDetail.size} m<sup>2</sup></p>
						<p>{listingDetail.description}</p>
					</div>
				);
			})}
			<div className="listingsButtonDiv">
				<button className='listingsButton'>VIEW MORE LISTINGS</button>
			</div>
		</div>
		);
	}
}


export default ListingsComponent;