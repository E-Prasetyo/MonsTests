import { HomeIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
   const navigate = useNavigate();
  return (
    <div className='h-screen w-full bg-slate-300 flex flex-col justify-center items-center space-y-10'>
        <h1 className='font-serif text-5xl'>
            404 NotFound
        </h1>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={()=>navigate('/')}
          >
            <HomeIcon className='h-10' /> Home
        </button>
    </div>
  )
}

export default NotFound