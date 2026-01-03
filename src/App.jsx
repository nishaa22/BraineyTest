import React from 'react'
import AppRouter from './routes'

const App = () => {
  return (
    <div className='flex justify-center items-center bg-gray-300 m-0 p-0 h-screen'>
      <div className='bg-white w-[375px] h-[800px] m-0 p-0 h-screen'>
        <AppRouter />
      </div>
    </div>
  )
}

export default App
