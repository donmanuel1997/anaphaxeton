"use client";
import { EnvelopeIcon, KeyIcon, PowerIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import "../../styles/globals.css"
import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import { Header } from '../Header'
import Link from 'next/link'
import { Client, Account, ID } from 'appwrite';
import { account } from '../appwrite/config'
import { useRouter } from 'next/navigation';

export default function Page() {
        const router = useRouter();
        const [ready, setReady] = useState(false)
        const [success, setSuccess] = useState(false)
        const [errorlogger, setErrorlogger] = useState("")
        const [user, setUser] = useState({
                fullname: "",
                email: "",
                password: "",
        })
        const SignupUser = async (e: { preventDefault: () => void; }) => {
                e.preventDefault()
                setReady(true)
                const promise = account.create(
                        ID.unique(),
                        user.email,
                        user.password,
                        user.fullname
                )
                promise.then(function (response) {
                        setSuccess(true)
                        setInterval(() => {
                                router.push("./Signin")
                                }, 4000);
                },
                        function (error) {
                                setErrorlogger(error)
                                setReady(false)
                                setInterval(() => {
                                setErrorlogger("")
                                }, 4000);
                        })
        }


        return (
                <div>
                        <Header />
                        <div className="flex flex-1 h-screen w-screen  justify-center items-center bg-gray-800">

                                <div className="flex flex-col space-y-1 bg-white w-4/5 h-3/5 lg:w-3/5 lg:h-3/5 p-3 justify-center items-center rounded-lg space-x-5">
                                        <div className="">
                                        {success ?
                                                <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                                                <p>Registration Successful!</p>
                                              </div>
                                        :null}
                                        {errorlogger ?
                                                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                                <span className="text-center">
                                                                       Oops, an error occured!<br/>
                                                                       {""+errorlogger}
                                                                </span>
                                                        </div> : null}
                                                <div className="flex justify-center items-center space-x-2">
                                                        <div className=" tracking-widest text-sm my-2"> CREATE A FREE ACCOUNT</div>
                                                        <div><KeyIcon className="h-3 w-3" /></div>
                                                </div>
                                                
                                                <div className="flex flex-1 flex-col  space-y-2">
                                                        <div className=" flex justify-center outline-none rounded-sm px-3 py-1 items-center space-x-2 border border-cyan-900">
                                                                <div className=" ">
                                                                        <UserIcon className="h-4 w-4" />
                                                                </div>
                                                                <div>
                                                                        <input onChange={(e) => setUser({
                                                                                ...user,
                                                                                fullname: e.target.value
                                                                        })}
                                                                                className=" outline-none opacity-60 text-sm" type="text" placeholder="First | Last Name" />
                                                                </div>
                                                        </div>
                                                        <div className=" flex justify-center outline-none rounded-sm px-3 py-1 items-center space-x-2 border border-cyan-900">
                                                                <div className=" ">
                                                                        <EnvelopeIcon className="h-4 w-4" />
                                                                </div>
                                                                <div>
                                                                        <input onChange={(e) => setUser({
                                                                                ...user,
                                                                                email: e.target.value
                                                                        })}
                                                                                className=" outline-none opacity-60 text-sm" type="text" placeholder="user@domain" />
                                                                </div>
                                                        </div>
                                                        <div className=" flex justify-center outline-none rounded-sm px-3 py-1 items-center space-x-2 border border-cyan-900">
                                                                <div className=" ">
                                                                        <KeyIcon className="h-4 w-4" />
                                                                </div>
                                                                <div>
                                                                        <input onChange={(e) => setUser({
                                                                                ...user,
                                                                                password: e.target.value
                                                                        })}
                                                                                className=" outline-none opacity-60 text-sm" type="password" placeholder="**********" />
                                                                </div>
                                                        </div>
                                                        {ready ?
                                                                <button className=" flex space-x-1 rounded-sm text-sm   text-white justify-center items-center bg-gray-800 px-3 py-1">
                                                                        <PowerIcon className="h-4 w-4" />
                                                                        <div>Signing up....</div>
                                                                </button>
                                                                :
                                                                <button onClick={SignupUser} className=" flex space-x-1 rounded-sm text-sm   text-white justify-center items-center bg-gray-800 px-3 py-1">
                                                                        <PowerIcon className="h-4 w-4" />
                                                                        <div>Create account</div>
                                                                </button>
                                                        }
                                                        <div className='flex flex-1 mt-6'>
                                                                <p className=' text-sm mt-2'>Already have an account? Login now.</p>
                                                        </div>
                                                        <button className=" flex rounded-sm text-sm text-gray-800 justify-center items-center border border-gray-800 px-3 py-1">
                                                                <Link href="../Signin" className='flex justify-center items-center space-x-1'>
                                                                        Login
                                                                </Link>
                                                        </button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <Footer />

                </div>
        )
}
