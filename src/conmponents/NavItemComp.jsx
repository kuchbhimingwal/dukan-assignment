import React from 'react'

function NavItemComp({
  svg,
  title
}) {
  return (
    <div className='px-5 py-2'>
      <div className='flex'>
      <div dangerouslySetInnerHTML={{ __html: svg }} />
        <div className='pl-2 font-light'>{title}</div>
      </div>
    </div>
  )
}

export default NavItemComp