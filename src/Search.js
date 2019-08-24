import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import SearchMenuComponent from './SearchMenu';


class SearchComponent extends Component {
	
		state = {on: false}

	toggle = () => {
		this.setState({on: !this.state.on})
	}

	render(){
		return (
			<div className='searchBar'>
				<p>WHAT ARE YOU LOOKING FOR?</p>
				{this.state.on && <SearchMenuComponent/>}
				<p className="searchIcon" onClick={this.toggle}><FontAwesomeIcon icon={faCog} /></p>
			</div>
		);
	}
}


// class SearchComponent extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {"showSearchMenu": false}
// 		this.clickToSee = this.clickToSee.bind(this);
// 	}

// 	clickToSee(){
// 		this.setState({"showSearchMenu": true})
// 	}

// 	render(){
// 		return (
// 			<div className='searchBar'>
// 				<p>WHAT ARE YOU LOOKING FOR?</p>
// 				{this.state.showSearchMenu ? <SearchMenuComponent/> : <p onClick={this.clickToSee}><FontAwesomeIcon icon={faCog} /></p> }
// 			</div>
// 		);
// 	}
// }

export default SearchComponent;
