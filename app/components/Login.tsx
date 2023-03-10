'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Head from './Head'
import Footer from './Footer'


type Props = {}

export default function Login({}: Props) {
  return (
    <div className='h-screen flex flex-col bg-gray-800'>
    <Head />
    <div className='flex flex-col  md:flex-1 my-8 md:my-0  justify-center items-center'>
      <div className=' animate-pulse text-2xl font-bold rounded-full text-white tracking-widest p-1 bg-gray-900'>
        <img src='./openai.jpg' className='w-12 h-12 rounded-full' />
      </div>
      <div className='text-2xl font-bold text-white tracking-widest'>
        ANAPHAXETON
      </div>
      <div className='m-8'>
        <p className='text-white text-xs'>
        Creating safe artificial general intelligence that benefits all of humanity.        
        We{"'"}ve trained a model called "ANAPHAXETON" ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
        
        </p>
      </div>
      <div className=''>
        <button onClick={() => signIn("google")} className=' animate-bounce flex justify-center items-center bg-gray-700  w-[150px] px-5 py-2 rounded-lg text-xs text-white'>
          <img src='./g.png'  className='w-6 h-6 rounded-full mr-3' />
          Sign In
        </button>
      </div>
    </div>
    <Footer />
    </div>

  )
}