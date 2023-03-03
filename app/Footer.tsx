import { MapIcon, MapPinIcon, SunIcon, TagIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-white'>
    <div className='bg-slate-700 mt-1'>
        <div className='border border-gray-800'>
        <div className='p-3 flex ml-5 text-white space-x-1 '>
            <div className='flex justify-center items-center'>
                <MapPinIcon  className="h-3 w-3"/>
            </div>
            <div className=' text-sm'>Nigeria</div>
        </div>
        </div>
        <div className='p-3 mb-3 flex ml-5 text-white space-x-5'>
            <div className='flex space-x-1'>
            <div className='flex justify-center items-center'>
                <TagIcon  className="h-3 w-3"/>
            </div>
            <div className=' text-sm'>About</div>
            </div>
            <div className='flex space-x-1'>
            <div className='flex justify-center items-center'>
                <SunIcon  className="h-4 w-4"/>
            </div>
            <div className=' text-sm'>The Developer</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer