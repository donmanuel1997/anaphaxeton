"use client"
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { collection, orderBy, query } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase';
import Message from './Message';

type Props = {
  chatId:string;
}

export default function Chat({chatId}: Props) {
  const  {data : session} = useSession()
  const [messages] = useCollection(session && query(
    collection(db, "users", session?.user?.email!, "chats", chatId, "messages"),
    orderBy("createdAt", "asc")
  ))

  return (
    <div className="flex-1  overflow-y-scroll overflow-x-hidden ">
      {messages?.empty && (
        <>
          <div className="mt-10 mb-[200px] text-center text-white">
            Type a prompt in below to get started!
          </div>
          <ArrowDownCircleIcon className="h-10 w-10 mx-auto mt-5 text-white animate-bounce" />
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  )
}