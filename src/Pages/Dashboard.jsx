import React from 'react'
import RestaurantCard from '../components/RestrauntCard'
import BakeryCard from '../components/BakeryCard'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className='h-full h-scroll'>
      <div className='p-2'>
        <div className='flex justify-between items-center p-1'>
          <p className='text-base font-medium'>Your Taste</p>
          <p className='text-sm text-gray-600 flex items-center gap-1'>
            <span>see all</span>
            <MdOutlineKeyboardArrowRight color='white' className='bg-gray-400 rounded-full' />
          </p>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 hide-scrollbar">
          {Array.from({ length: 4 }).map((_, index) => (
            <BakeryCard key={index} />
          ))}
        </div>
      </div>

      <div className='px-2'>
        <p className='text-base font-medium p-2'>Popular Ones</p>
        <div>
          {Array.from({ length: 4 }).map((_, index) => (
            <RestaurantCard key={index} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard