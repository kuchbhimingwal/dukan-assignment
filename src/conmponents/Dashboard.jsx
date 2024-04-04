import React from 'react'
import Overview from './Overview'
import Transitions from './Transitions'

function Dashboard({
  whatMonth
}) {
  return (
    <div>
      <Overview whatMonth={whatMonth} />
      <Transitions whatMonth={whatMonth} />
    </div>
  )
}

export default Dashboard