"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/solid';
import { usePathname, useRouter } from "next/navigation"
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';

type Props = {
    id : string;
}

export default function ChatRow({id}: Props) {
    const pathname = usePathname();
    const router = useRouter();
    const {data : session } = useSession();
    const [active, setActive] = useState(false);
    const [messages] = useCollection(
        query(
            collection(db, "users", session?.user?.email!, "chats", id, "messages"),
            orderBy("createdAt", "desc")
          )
    )
    useEffect(() => {
        if(!pathname) return;
        setActive(pathname.includes(id));
    }, [pathname])

    const removeChat = async () => {
        await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id))
        router.replace("/")
    } 
    
  return (
   <Link href={`/chat/${id}`} className={`chatRow ${active && 'bg-slate-300 text-gray-800 hover:text-white'}`}>
    <ChatBubbleLeftIcon className='h-5 w-5' />
    <p className='flex-1 hidden md:inline'>
    {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
    </p>
    <TrashIcon onClick={removeChat} className='h-5 w-5 hover:text-red-600' />
   </Link>
  )
}