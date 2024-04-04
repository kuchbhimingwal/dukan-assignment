import React from 'react'

function Button({
  title,
  slected
}) {
  if(!slected){
    return (
      <div>
        <button className='bg-searchBar m-2 rounded-3xl text-searchText w-20 h-7 font-semimedium text-sm'>{title}</button>
      </div>
    )
  } else {
  return (
    <div>
      <button className='bg-websiteBlue-light m-2 rounded-3xl text-white w-20 h-7 font-semimedium text-sm'>{title}</button>
    </div>
  )
  }
}

export default Button