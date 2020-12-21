import React from 'react'

import SearchInput from './SearchInput'
import ModalWindow from './ModalWindow'


function Photos({ store, fn }){
	return(
		<div className="photos">
			<div className="photosTop flex">
				<SearchInput input={ store.main.input } fn={ fn } />
			</div>
			<div className="resPannel">{ store.main.input.key }</div>
			<div className="tags flex wrap">
			{
				store.main.input.tags &&
				store.main.input.tags.map( (tag, index)=>{
					return(
						<div 	className="tagsQuery flex" key={ index+tag.text }
								onClick={ ()=>fn("ON_CHANGE_INPUT", tag.text) }
						>{ tag.text }</div>
					)
				})
			}
			</div>

			<div className="photosPannel flex wrap">
			{	
				store.photos &&
				store.photos.map( (item, index)=>{
					return(
						<div 	className="photoItem" key={ index+item.id }
								onClick={ ()=>fn("CLICK_PHOTO", item) }
						><img src={ item.link.small } alt="photoItem" /></div>
					)
				})
			}
			</div>

			{ store.modal.active && <ModalWindow modal={ store.modal } fn={ fn } /> }

		</div>
	)
}

export default Photos