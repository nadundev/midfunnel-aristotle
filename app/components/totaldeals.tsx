import React from 'react'

const TotalDeals = () => {
  return (
    <div className='flex gap-3 border rounded-3xl px-2.5 py-1 items-center'>
        <p className='text-sm font-medium text-gray-500'>Your total deals</p>
        <div className='text-sm font-semibold bg-brand-100 text-brand-600 rounded-sm px-1'>87</div>
    </div>
  )
}

export default TotalDeals;