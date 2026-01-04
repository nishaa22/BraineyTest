import React from 'react'
import RestaurantCard from '../components/RestrauntCard'
import BakeryCard from '../components/BakeryCard'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from '../components/Carousel';
import DashboardHeader from '../components/DashboardHeader';
import { useState } from 'react';
import { useEffect } from 'react';

const Dashboard = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch(
          "https://staging.fastor.ai/v1/m/restaurant?city_id=118"
        );
        const data = await res.json();
        setRestaurants(data?.data?.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRestaurants();
  }, []);

  console.log(restaurants)

  return (
    <div className='h-full h-scroll'>
      <DashboardHeader />

      <div className='p-2'>
        <div className='flex justify-between items-center p-1'>
          <p className='text-base font-medium'>Your Taste</p>
          <p className='text-sm text-gray-600 flex items-center gap-1'>
            <span>see all</span>
            <MdOutlineKeyboardArrowRight color='white' className='bg-gray-400 rounded-full' />
          </p>
        </div>
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 hide-scrollbar">
          {restaurants.map((res) => (
            <BakeryCard key={res.restaurant_id} restaurant={res} />
          ))}
        </div>
      </div>

      <div className="p-4">
        <Carousel />
      </div>

      <div className='px-2 pb-3'>
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