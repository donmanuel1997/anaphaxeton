import React from 'react'
import Chat from '../../components/Chat'
import ChatInput from '../../components/ChatInput'

type Props = {
  params : {
    id: string;
  }
}

export default function page({params : {id}}: Props) {
  return (
    <div className="sm:flex-1 flex flex-col lg:h-screen overflow-hidden">
       {/*Chats*/}
       <Chat chatId={id}/>
       {/*Chats Input*/}
       <ChatInput chatId={id} />
    </div>
  )
}