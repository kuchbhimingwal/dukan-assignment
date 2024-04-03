import React from 'react'
import SearchBar from './SearchBar'
import HeaderLinks from './HeaderLinks'
import HeaderIcons from './HeaderIcons'

function Header() {
  return (
    <div className='grid grid-cols-3'>
      <HeaderLinks />
      <SearchBar />
      <HeaderIcons />
    </div>
  )
}

export default Header