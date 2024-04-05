import React from 'react'
import RevenueCard from './RevenueCard'

function Overview({
  whatMonth
}) {
  return (
    <div>
      <div className='flex justify-between p-5 pt-7'>
        <div className='font-semimedium text-xl'>Overview</div>
        <div className='flex border rounded-md border-searchBar bg-white cursor-pointer'>
          <span className='px-4 py-1 '>{whatMonth}</span>
          <svg className="mt-3 mr-2" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z" fill="#4D4D4D"/>
          </svg>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={23} nextPayment="Today, 04:00PM" isBlue={true}/>
        <RevenueCard title={"Amount pendnig"} amount={"92,321,20"} orderCount={13} isBlue={false}/>
        <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} orderCount={0} isBlue={false}/>
      </div>
    </div>
  )
}

export default Overview