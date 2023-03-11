'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import Head from './Head'
import Footer from './Footer'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'


type Props = {}

export default function Login({}: Props) {
  return (
    <div className='lg:h-screen w-screen flex flex-col bg-gray-800'>
    <Head />
    <div className='flex flex-col my-2 justify-center items-center'>
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

      <div className='flex flex-col lg:flex-row  mb-3  rounded-lg space-x-2 text-center'>
        <div className='mb-5 lg:mb-0 flex-1  p-3 m-3 bg-white'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <SunIcon className="h-6 w-6  text-gray-800"/>
            <h2>Example</h2>
          </div>
          <div className=' space-y-2'>
            <p className='hText'>Explain something to me</p>
            <p className='hText'>What is the difference between a dog and a cat?</p>
            <p className='hText'>What is the color of the sun?</p>
          </div>
        </div>


        <div  className='mb-5 lg:mb-0  p-3 m-3 bg-white'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <BoltIcon className="h-6 w-6 text-gray-800"/>
            <h2>Capabilities</h2>
          </div>
          <div className=' space-y-2'>
            <p className='hText'>Use any ChatGPT model</p>
            <p className='hText'>Fully functional database.</p>
            <p className='hText'>Hot Toast notifications when chatGPT is thinking! </p>
          </div>
        </div>


        <div  className='mb-5 lg:mb-0  p-3 m-3 bg-white'>
          <div className='flex flex-col items-center justify-center mb-5'>
          <ExclamationTriangleIcon className="h-6 w-6  text-gray-800"/>
            <h2>Limitations</h2>
          </div>
          <div className=' space-y-2'>
            <p className='hText'>May occasionally generate incorrect information</p>
            <p className='hText'>May occationally produce harmful instructions or biased contents</p>
            <p className='hText'>Limited knowledge of the world and events after 2021</p>
          </div>
        </div>
      </div>
    </div>


    </div>

  )
}