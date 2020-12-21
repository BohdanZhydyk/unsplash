import React from 'react'

import geoIcon from './../imgs/geo-icon.png'
import leftIcon from './../imgs/left-icon.png'
import rightIcon from './../imgs/right-icon.png'
import likeIcon from './../imgs/like-icon.png'
import plusIcon from './../imgs/plus-icon.png'
import closeIcon from './../imgs/delete-icon.png'
import shareIcon from './../imgs/share-icon.png'
import infoIcon from './../imgs/info-icon.png'


function ModalWindow({ modal, fn }){
	return(
		<div className="window flex stretch">
			<div className="slideBtnL flex" onClick={ ()=>fn("SLIDER-BTN", {id:modal.id, dir:"L"}) }><img src={ leftIcon } alt="left" /></div>
			<div className="photoArea">
				<div className="areaTop flex stretch">
					<div className="areaTopL flex start">
						<img src={ modal.ava } alt="ava" />
						<div>
							<div className="authorName">{ modal.author }</div>
							{ modal.instagram !== null && <div className="authorInstagram">{ `@${modal.instagram}` }</div> }
						</div>
					</div>
					<div className="areaTopR flex end">
						<div className="sliderBtns flex"><img src={ likeIcon } alt="like" /></div>
						<div className="sliderBtns flex"><img src={ plusIcon } alt="plus" /></div>
						<div className="sliderBtns flex" onClick={ ()=>fn("CLOSE_WINDOW","") }><img src={ closeIcon } alt="close" /></div>
					</div>
				</div>
				<div className="prewiew flex"><img className="prewiewImg" src={ modal.photo } alt="photo" /></div>
				<div className="areaBottom flex stretch">
					<div className="areaBottomL flex start">
						<img src={ geoIcon } alt="geo" />
						<span>{ modal.location }</span>
					</div>
					<div className="areaBottomR flex end">
						<div className="sliderBtns flex"><img src={ shareIcon } alt="like" /><span>share</span></div>
						<div className="sliderBtns flex"><img src={ infoIcon } alt="plus" /><span>info</span></div>
					</div>
				</div>
			</div>
			<div className="slideBtnR flex" onClick={ ()=>fn("SLIDER-BTN", {id:modal.id, dir:"R"}) }><img src={ rightIcon } alt="right" /></div>
		</div>
	)
}

export default ModalWindow