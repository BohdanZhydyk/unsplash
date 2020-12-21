import React from 'react'

import SearchInput from './SearchInput'


function Search({ store }){

	let bgImg  = store.main.bgImg
	let logo   = store.main.logo
	let text   = store.main.info
	let link   = store.main.info.link
	let trend  = store.main.info.trend

	return(
		<div className="search">
			<img className="backgroundImg" src={ bgImg } alt="background" />
			<div className="mainPannel flex" >
			  <div className="searchPannel">
			    <div className="logo">{ logo }</div>

			    <div>
			      <span>{ text[0] }</span>
			      <a href={ text[3] } target="_blank">{ text[1] }</a>
			    </div>
			    
			    <div>{ text[2] }</div>

			    <SearchInput input={ store.main.input } fn={ store.fn } />

			  </div>
			</div>
		</div>
	)
}
//
export default Search