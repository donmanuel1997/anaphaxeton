import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Head({}: Props) {
  return (
    <div className='flex bg-white justify-between p-2 w-screen'>
        <div className='ml-2 space-x-2 flex items-center '>
        <div className='text-2xl font-bold rounded-full text-white tracking-widest p-1 bg-gray-900'>
        <img src='./openai.jpg' className='animate-pulse w-8 h-8 rounded-full' />
      </div>
      <div className='text-xs font-bold text-gray-800 tracking-widest'>
        ANAPHAXETON OPEN AI
      </div>
    </div>
    <div className=' cursor-pointer hover:bg-gray-800 hover:text-white flex border border-gray-800 rounded-lg px-4 justify-end items-center text-xs mr-2'>
    <Link href="https://primeumaton.org/#about" target="_blank">
        The Developer
      </Link>
    </div>
    </div>
  )
}