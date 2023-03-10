import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='flex bg-white  items-center p-4'>
  
    <div className='cursor-pointer rounded-sm hover:bg-gray-800 hover:text-white flex border border-gray-800   px-2 py-1 justify-center items-center text-xs mr-2 w-[90px]'>
        About
    </div>
    <div className=' cursor-pointer rounded-sm hover:bg-gray-800 hover:text-white flex border border-gray-800   px-2 py-1 justify-center items-center text-xs mr-2 w-[90px]'>
        Donate
    </div>
    </div>

  )
}