"use client"
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, {FormEvent, useState} from 'react'
import { db } from '../../firebase';
import {toast} from 'react-hot-toast'
import ModelSelection from './ModelSelection';
import useSWR from "swr";

type Props = {
  chatId:string;
}

export default function ChatInput({chatId}: Props) {
  const [prompt, setPrompt] = useState("")
  const { data : session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!prompt) return;

    const input = prompt.trim()
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatar.com/api/?name=${session?.user?.name!}`,
      }  
    }

    await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
      message)

      // Toast notification Loading 
      const notification = toast.loading("Asking Anaphaxeton...")
      await fetch('/api/askQuestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: input, chatId, model, session
        })
      }).then(() => {
        toast.success("Anaphaxeton responded!",{
          id: notification
        })
      })
  }
  return (
    <div className='my-3 bg-gray-700 text-gray-800 text-sm rounded-lg'>
      <form onSubmit={sendMessage} className='p-2 space-x-5 flex-1 flex  mx-2'>
        <input
        disabled={!session}
        value={prompt}
        onChange={e => setPrompt(e.target.value)} className="flex flex-1 rounded-lg px-5 py-2 outline-none bg-transparent text-white"
        type="text" placeholder='Type a message' />
        <button
        disabled={!prompt || !session}
        type='submit'  className='bg-white p-3 rounded-full animate-spin'>
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45' />
        </button>
      </form>
    </div>
  )
}