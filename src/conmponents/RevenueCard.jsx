import React from 'react'

function RevenueCard(
  {
     title,
     orderCount,
     amount
  }
) {
  return (
    <div className='bg-white rounded shadow-sm p-4 m-4'>
      <div className='text-[grey] text-sm'>
        {title}
        ?
      </div>

      <div className='flex justify-between'>
        <div className='font-bold text-xl pt-2'>
          ₹{amount}
        </div>

        {orderCount ? <div className='flex text-blue-400 cursor-pointer font-medium text-xs pt-4'>
          <div  className='underline'>
            {orderCount} orders 
          </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </div> : null}
      </div>
    </div>
  )
}

export default RevenueCard