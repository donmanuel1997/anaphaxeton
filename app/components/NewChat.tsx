import { PlusIcon, SunIcon } from '@heroicons/react/24/solid'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useRouter } from "next/navigation"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase'


type Props = {}

export default function NewChat({ }: Props) {
  const router = useRouter()
  const { data: session } = useSession()
  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email!, 'chats'),{
      userId: session?.user?.email!,
      createdAt: serverTimestamp()
    })
    router.push(`/chat/${doc.id}`)
  };
  return (
    <div onClick={createNewChat} className='chatRow border border-gray-700 items-center justify-center'>
      <PlusIcon className="h-4 w-4" />
      <div className='hidden md:inline'>
        New Chat
      </div>
    </div>
  )
}