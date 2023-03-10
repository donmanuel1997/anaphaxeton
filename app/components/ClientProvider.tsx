"use client"
import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {}

export default function ClientProvider({}: Props) {
  return (
    <>
    <Toaster position="bottom-center" />
    </>
  )
}