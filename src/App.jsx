import React from 'react'
import AppRouter from './routes'

const App = () => {
  return (
    <div className="flex justify-center bg-gray-300 h-screen overflow-hidden">
      <div className="bg-white w-[375px] overflow-y-auto hide-scrollbar">
        <AppRouter />
      </div>
    </div>
  )
}

export default App
