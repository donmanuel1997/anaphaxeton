import React from 'react'
import { HomeIcon, KeyIcon, LanguageIcon, UserIcon, UserPlusIcon } from "@heroicons/react/24/solid"
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex flex-row justify-between sticky p-3  bg-white'>
        <div className='flex justify-center items-center space-x-2'>
            <div className='  bg-gray-100 rounded-full shadow-lg p-1 border border-gray-800'>
                <img src='./logo.png' className='w-[35px] h-[30px]' />
            </div>
            <div className='flex justify-center items-center space-x-2'>
            <Link href="./">
                <h3 className=' tracking-widest text-sm'>ANAPHAXETON</h3>
            </Link>
                <Link href="./" className='flex space-x-1'>
                <div className='lg:hidden bg-gray-800 rounded-full p-2'>
                    <HomeIcon  className="h-4 w-4 text-white"/>
                </div>
                </Link>
            </div>
        </div>
        <div className='flex flex-1 justify-between mx-4 items-center '>
            <div  className='flex flex-1  space-x-2  justify-center items-center'>
            <Link href="https://primeumaton.org/#about" target="_blank">
            <div className='hidden lg:flex space-x-1 border  justify-center items-center font-sans cursor-pointer hover:bg-gray-800 hover:text-white hover:white py-2 px-4 rounded-lg'>
               <div className='hidden lg:flex text-sm  opacity-80'>The Developer</div>
            </div>
            </Link>
            <div className='hidden lg:flex space-x-1 border  justify-center items-center font-sans cursor-pointer hover:bg-gray-800 hover:text-white hover:white py-2 px-4 rounded-lg'>
               <div className='hidden lg:flex text-sm  opacity-80'>Privacy Policy</div>
            </div>
            <div className='hidden lg:flex space-x-1 border  justify-center items-center font-sans cursor-pointer hover:bg-gray-800 hover:text-white hover:white py-2 px-4 rounded-lg'>
               <div className='hidden lg:flex text-sm  opacity-80'>Terms of Use</div>
            </div>
            <div></div>
            </div>
            <div className='flex space-x-2'>
            <div className='flex justify-center items-center font-sans cursor-pointer hover:bg-gray-800 hover:text-white hover:white py-2 px-4 rounded-lg'>
                <LanguageIcon  className="h-4 w-4"/>
                <div className='hidden lg:flex text-sm opacity-80'>Languages</div>
            </div>
            <div className='flex cursor-pointer justify-center items-center font-sans hover:text-gray-800 bg-gray-800 hover:bg-gray-100 text-white  py-1 px-5 border border-gray-400 rounded-lg shadow'>
            
            <Link href="./Signin" className='flex space-x-1'>
             <div className='hidden lg:flex text-sm'>
                Sign in
            </div>
            <KeyIcon  className="h-3 w-3"/>
            </Link>
            
            </div>

            <div className='flex cursor-pointer justify-center items-center font-sans bg-white hover:bg-gray-100 text-gray-800  py-1 px-5 border border-gray-400 rounded-lg shadow'>
            
            <Link href="./Signup" className='flex space-x-1'>
             <div className='text-sm flex justify-center items-center space-x-1'>
                <div><UserPlusIcon  className="h-3 w-3"/> </div>
                <div className='hidden lg:flex '>Create account</div>
            </div>
            </Link>
            
            </div>
            </div>
        </div>
    </div>
  )
}
