import React from 'react'
import { transitions } from '../assets/transitions'
function TransitionTable() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='relative py-2 px-4 col-span-3'>
          <svg class="absolute top-5 left-6" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080"/>
          </svg>
          <input type="text" placeholder="Order ID or transaction ID" class="w-full py-2 px-9 rounded-md border border-searchBar text-searchText font-light" />
        </div>

        <div className='flex justify-center items-center '>
          <div className='flex justify-center items-center p-1.5 border w-full rounded-md border-searchBar text-searchText font-light'>Sort 
            <svg className='ml-2' width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z" fill="#4D4D4D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z" fill="#4D4D4D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z" fill="#4D4D4D"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z" fill="#4D4D4D"/>
            </svg>

          </div>
          <div className='flex justify-center items-center p-2 mx-2 border w-full rounded-md border-searchBar'>
          <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z" fill="#4D4D4D"/>
          </svg>

          </div>
        </div>
      </div>

      <div className='grid-cols-5 bg-searchBar p-2 mx-4 font-light text-sm hidden sm:grid'>
        <div>Order ID</div>
        <div>Status</div>
        <div>Transaction ID</div>
        <div>Refund date</div>
        <div className='text-right'>Order amount</div>
      </div>

      {transitions.map((transaction)=>(
      <div className='grid sm:block grid-cols-2 '>
        <div className='grid-cols-1 sm:hidden p-2 mx-4 font-light text-sm grid '>
          <div>Order ID</div>
          <div>Status</div>
          <div>Transaction ID</div>
          <div>Refund date</div>
          <div>Order amount</div>
        </div>
        <div className='grid sm:grid-cols-5 grid-col-1 border-b border-searchBar p-2 mx-4 sm:p-0 sm:pb-3 sm:m-4 font-light text-sm text-right sm:text-left'>
              <div className='text-blue-400'>{transaction.orderId}</div>
              <div>{transaction.status}</div>
              <div className='text-searchText'>{transaction.transitionId}</div>
              <div className='text-searchText'>{transaction.refundDate}</div>
              <div className='text-searchText sm:text-right'>₹ {transaction.orderAmount}</div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default TransitionTable