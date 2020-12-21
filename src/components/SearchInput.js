import React from 'react'

import searchIcon from './../imgs/search-icon.png'
import deleteIcon from './../imgs/delete-icon.png'


function SearchInput({ input, fn }){

  let trend       = input.trend
  let placeholder = input.placeholder
  let value       = input.value
  let queries     = input.queries

  return(
    <div className="searchInput">

      <img className="searchImg" src={ searchIcon } alt="search" />
      {
        value.length > 0 &&
        <img className="deleteImg" src={ deleteIcon } onClick={ ()=>fn("CLEAR_INPUT", "") } alt="delete" />
      }

      <input  type="text"
              placeholder={ placeholder }
              value={ value }
              onChange={ (e)=>fn("ON_CHANGE_INPUT", e.target.value) }
              onKeyDown={
                (e)=>{
                  if(e.key === "Enter"){ fn("CLICK_QUERY", input.queries[0]) }
                }
              }
      />

      {
        input.search
        ?
        <div className="searchQueries">
        {
          queries.map( (item, index)=>{
            return(
              <div  className="searchQuery" key={ index+item.query }
                    onClick={ ()=>fn("CLICK_QUERY", {query:item.query, photos:item.photos}) }
              >{ item.query }</div>
            )
          })
        }
        </div>
        :
        <div className="trending">{ `${trend[0]} ${trend[1]}, ${trend[2]}, ${trend[3]}, ${trend[4]}, ${trend[5]}` }</div>
      }

    </div>
  )
}

export default SearchInput