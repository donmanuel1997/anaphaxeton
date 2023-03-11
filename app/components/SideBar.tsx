'use client'
import React from 'react'
import NewChat from './NewChat'
import { useSession, signOut } from 'next-auth/react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '../../firebase'
import ModelSelection from "./ModelSelection";
import ChatRow from './ChatRow'
import {useRouter} from "next/navigation"

type Props = {}

export default function SideBar({}: Props) {
  const { data : session } = useSession();
  const router = useRouter()
  const [chats, loading,error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'),
    orderBy("createdAt","desc"))
)

const Logout = () => {
  router.push("/")
  signOut()
}
  return (
    <div className='p-1 flex flex-col lg:h-screen'>
      <div className='lg:flex-1'>
      {session && (
      <div className='bg-slate-800 py-1'>
      <div className='flex flex-row justify-center items-center mx-auto space-x-2 mb-3  rounded-lg'>
      <div className='bg-white p-1 rounded-full hover:bg-gray-700'>
      <img src={session.user?.image!} alt={session.user?.name!}  onClick={Logout}
      className="rounded-full w-12 h-12 animate-pulse" />
      </div>
        <div className='text-white  font-semibold text-sm'>
        {session.user?.name!}
        </div>
        <div className='flex  justify-end'>
          <button onClick={Logout} className='text-gray-800 flex rounded-sm text-xs bg-slate-500 px-2 py-1 cursor-pointer'>
          Logout
          </button>
        </div>
    </div>
    </div>
      )}
      {session ? (
          <div>
            <div className='mt-2 flex lg:flex-col flex-1 px-3 space-x-2 lg:space-x-0'>
              <div className='flex-1'>
                <NewChat />
              </div>
              <div className='flex-1'>
              <ModelSelection />
              </div>
            </div>

            <div className="flex flex-col space-y-2 my-2 px-3">
              {loading && (
                <div className="animate-pulse text-center text-white">
                  <p>Loading Chats...</p>
                </div>
              )}
              {chats?.docs.map((chat) => (
                <ChatRow key={chat.id} id={chat.id} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-gray-300 animate-pulse">
              Sign in to view Chats
            </h2>
          </div>
        )}

      </div>
      
    </div>
  )
}