import React from 'react'
import { BeakerIcon, BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

function page() {
  return (
    <div className='flex flex-1 flex-col h-screen px-4 text-white items-center justify-center '>
      <h1 className='text-4xl font-bold mb-20'>
        ChatGPT
      </h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <SunIcon className="h-6 w-6 text-white"/>
            <h2>Example</h2>
          </div>
          <div className=' space-y-2'>
            <p className='hText'>Explain something to me</p>
            <p className='hText'>What is the difference between a dog and a cat?</p>
            <p className='hText'>What is the color of the sun?</p>
          </div>
        </div>


        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <BoltIcon className="h-6 w-6 text-white"/>
            <h2>Capabilities</h2>
          </div>
          <div className=' space-y-2'>
            <p className='hText'>Use any ChatGPT model</p>
            <p className='hText'>Fully functional database.</p>
            <p className='hText'>Hot Toast notifications when chatGPT is thinking! </p>
          </div>
        </div>


        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
          <ExclamationTriangleIcon className="h-6 w-6 text-white"/>
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
  )
}

export default page