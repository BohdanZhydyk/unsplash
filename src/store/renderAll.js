import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'
import App from './../App'

import store from './store.js'

function renderAll(store){
	
	ReactDOM.render(
	  <React.StrictMode>
	    <App store={ store } />
	  </React.StrictMode>,
	  document.getElementById('root')
	)

}

export default renderAll