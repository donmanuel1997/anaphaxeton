import { EnvelopeIcon, KeyIcon, PowerIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import "../../styles/globals.css"
import React from 'react'
import Footer from '../Footer'
import  {Header}  from '../Header'
import Link from 'next/link'

export default function Page() {
  return (
    <div>
    <Header />
    <div className="flex flex-1 h-screen  justify-center items-center bg-gray-800">
        
        <div className="flex flex-col space-y-4 bg-white w-4/5 h-4/5 lg:w-3/5 lg:h-3/5 p-3 justify-center items-center rounded-lg space-x-5">
         <div className="">
         <div className="flex justify-center items-center space-x-2">
                    <div className=" tracking-widest text-sm my-2">ACCOUNT LOGIN</div>
                    <div><KeyIcon  className="h-3 w-3"/></div>
                </div>
           <div className="flex flex-1 flex-col  space-y-2">
                
                <div className=" flex justify-center outline-none rounded-sm px-3 py-1 items-center space-x-2 border border-cyan-900">
                        <div className=" ">
                        <EnvelopeIcon  className="h-4 w-4"/>
                        </div>
                        <div>
                        <input className=" outline-none opacity-60 text-sm"  type="text" placeholder="user@domain" />
                        </div>
                </div>
                <div className=" flex justify-center outline-none rounded-sm px-3 py-1 items-center space-x-2 border border-cyan-900">
                        <div className=" ">
                        <KeyIcon  className="h-4 w-4"/>
                        </div>
                        <div>
                        <input className=" outline-none opacity-60 text-sm"  type="password" placeholder="**********" />
                        </div>
                </div>
                <button className=" flex space-x-1 rounded-sm text-sm   text-white justify-center items-center bg-gray-800 px-3 py-1">
                <PowerIcon   className="h-4 w-4"/>
                <div>LOGIN</div>
                </button>
                
                <button className=" flex rounded-sm text-sm mt-2 text-gray-800 justify-center items-center border border-gray-800 px-3 py-1">
                <Link href="../Signup" className='flex justify-center items-center space-x-1'>
                <div>Create account</div>
                </Link>
                </button>
           </div>
        </div>
    </div>
    </div>
    <Footer />

    </div>
  )
}
