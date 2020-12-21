import $ from 'jquery'

import renderAll from './renderAll.js'

let store = {
	author:{
		name:"Bohdan Zhydyk",
		site:"bzDrive.com",
		link:"https://cv.bzdrive.com",
	},
	clientId:"yx1iTxwd3JM6oTOcvVcMK-pg1Ld9aYHXOlI4UXxXf6k",
	main:{
		bgImg:"https://images.unsplash.com/photo-1456530308602-976f6a4bb440?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MDIwNX0",
		logo:"Unsplash",
		info:[
			"The internet’s source of ",
			"freely-usable images.",
			"Powered by creators everywhere.",
			"https://unsplash.com/license",
		],
		input:{
			value:"",
			key:"",
			search:false,
			queries:[],
			tags:[],
			placeholder:"search free high-resolution photos",
			trend:["Trending: ","flower","wallpapers","backgrounds","happy","love"],
		},
	},
	photos:[],
	modal:{},
	fn:(action, param)=>{
		switch(action){
			case "ON_CHANGE_INPUT":
				store.main.input.value = param
				if( store.main.input.value.length > 2 ){
					store.main.input.search = true
					$.get("https://api.unsplash.com/search/collections?client_id="+store.clientId+"&query="+param, function(data){
						store.main.input.queries = []
						store.main.input.tags = []
						data.results.map( (item)=>{
							if(item.title.includes(param)){
								store.main.input.queries.push( {query:item.title, photos:item.links.photos} )
							}
							item.tags.map( (tag)=>{
								if( tag.type === "search" && store.main.input.tags.length < 9  ){
									store.main.input.tags.push( {text:tag.title} )
								}
							})
						})
						if(store.main.input.queries.length < 1){
							store.main.input.queries.push( {query:"there are no results!!!", photos:""} )
						}
					})
					.done(function(){ renderAll(store) })
				}
				else{ store.main.input.search = false }
				renderAll(store)
				break

			case "CLEAR_INPUT":
				store.main.input.search = false
				store.main.input.value = param
				store.main.input.queries = []
				renderAll(store)
				break

			case "CLICK_QUERY":
				if(param.photos === ""){return}
				store.main.input.search = false
				store.main.input.key = store.main.input.value = param.query

				$.get(param.photos+"?client_id="+store.clientId+"&orientation=landscape", function(data){
					store.photos = []
					data.map( (item, index)=>{
						store.photos.push(
							{
								id:index,
								link:{small:item.urls.small, big:item.urls.regular},
								ava:item.user.profile_image.large,
								author:item.user.name,
								instagram:item.user.instagram_username,
								location:item.user.location
							}
						)
					})
				})
				.done(function(){ renderAll(store) })
				break

			case "CLICK_PHOTO":
				store.modal = {
					active:true,
					id:param.id,
					ava:param.ava,
					photo:param.link.big,
					author:param.author,
					instagram:param.instagram,
					location:param.location
				}
				renderAll(store)
				break

			case "SLIDER-BTN":
				let id, count = store.photos.length
				if(param.dir === "R"){id = param.id + 1}
				if(param.dir === "L"){id = param.id - 1}
				if(id === count){ id = 0 }
				if(id === -1){ id = count - 1 }
				store.modal = {
					active:true,
					id:store.photos[id].id,
					ava:store.photos[id].ava,
					photo:store.photos[id].link.big,
					author:store.photos[id].author,
					instagram:store.photos[id].instagram,
					location:store.photos[id].location
				}
				renderAll(store)
				break

			case "CLOSE_WINDOW":
				store.modal = {active:false, id:"", ava:"", photo:"", author:"", instagram:"", location:""}
				renderAll(store)
				break

			default:
				break
		}
	}
}

export default store