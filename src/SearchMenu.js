import React from 'react';
import {NavLink} from 'react-router-dom';

function SearchMenuComponent() {
	return (
			<div className='searchMenu'>
				<ul>
					<li><NavLink>Appartements</NavLink></li>  
					<li><NavLink>Houses</NavLink></li>
					<li><NavLink>Villas</NavLink></li>
					<li><NavLink>Mansions</NavLink></li>
				</ul>
			</div>
	);
}

export default SearchMenuComponent;	