import { useState } from 'react'
import "./index.css";

function App() {
  

  return (
   <div>
    <div className="flex justify-between p-4 w-full">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-600 bg-clip-text text-transparent hover:from-amber-700 hover:to-orange-500 transition-all duration-300">Swapverse</h1>
      <div className='flex gap-x-8 sm:gap-x-6 pt-2 pr-3'>
         <a className='text-sm font-semibold text-amber-900 sm:text-lg' href='#'>About</a>
         <a className='text-sm font-semibold text-amber-900 sm:text-lg' href='#'>Login/Signup</a>
      </div>
    </div>
    <div className='flex flex-col sm:flex-row gap-2 justify-center items-center mt-32 sm:mt-20'>
      <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Swipe.
      </span>
       <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Swap.
      </span>
       <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Read.
      </span>
       <span className='text-6xl font-bold bg-gradient-to-r from-amber-900 via-orange-700 to-yellow-600 bg-clip-text text-transparent leading-tight sm:text-8xl'>
        Repeat.
      </span>
    </div>
  </div>


  )
}

export default App
