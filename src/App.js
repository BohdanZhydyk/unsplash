import React from 'react'
import './App.css'

import Search from './components/Search'
import Photos from './components/Photos'


function App({ store }) {
  return (
    <div className="container">
          { store.photos.length === 0 ? <Search store={ store } /> : <Photos store={ store } fn={ store.fn }/> }

          <a className="copyright" href={ store.author.link } target="_blank" rel="noreferrer">
            <span>developed by:</span>
            <span> </span>
            <span>{ store.author.name }</span>
            <span> </span>
            <span>{ store.author.site }</span>
          </a>
    </div>
  );
}

export default App
