import { DocumentData } from 'firebase/firestore'
import React from 'react'

type Props = {
    message: DocumentData;
}

export default function Message({message}: Props) {
  const isChatGPT = message.user.name === "Anaphaxeton";
  return (
    <div className='my-4'>
    {isChatGPT ? 
    <div className={`py-3 mx-4 text-white bg-[#183b4b] rounded-sm`}>
      <div className="flex justify-between space-x-5 px-10 max-w-2xl mx-auto">
        <p className="pt-1 text-sm">{message.text}</p>
        <img src={message.user.avatar} className="h-8 w-8 rounded-full  shadow-sm" />
      </div>
    </div>
    :
    <div className={`py-3 mx-4 text-gray-800  bg-[#e7eceb]/70 rounded-sm`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <img src={message.user.avatar} className="h-8 w-8 rounded-full shadow-sm" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
    }
    </div>
  )
}