import React from 'react'
import { transitions } from '../assets/transitions'
import Button from './Button'
import TransitionTable from './TransitionTable'

function Transitions({
  whatMonth
}) {
  return (
    <div>
      <div>
        <div className='p-5 pt-7 mt-3'>
          <div className='font-semimedium text-xl'>Transactions | {whatMonth}</div>
        </div>
      </div>
      <div className='flex pl-4'>
        <Button title="Payouts" slected={false}/>
        <Button title="Refunds" slected={true}/>
      </div>
      <div className='rounded-md border border-searchBar bg-white m-4'>
        <TransitionTable />
      </div>
    </div>
  )
}

export default Transitions