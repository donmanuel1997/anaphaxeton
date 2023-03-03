import { EnvelopeIcon, KeyIcon, UserIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import "../styles/globals.css"
import Footer from "./Footer"
import { Header } from "./Header"
function page() {
  return (
    <div>
    <Header />
    <div className="relative flex flex-1  h-screen  justify-center items-center">
     <Image
       src="/bg.webp"
       alt="X"
       layout="fill"
       objectFit="cover"
       className="w-fit blur-sm" />
        <div className="absolute flex w-2/5 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" flex text-6xl text-white font-sans justify-center items-center">Anaphaxeton</h1>
              <div className="flex flex-col  justify-center items-center">
                <p className="flex mt-6 text-white  justify-center items-center">
                  We{"'"}ve trained this model which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>
              
              <div className="flex justify-center items-center space-x-2">
                <Link href="/Signup">
              <div className=" mt-12  bg-gray-100 p-3 text-gray-800 rounded-lg opacity-70 cursor-pointer">Get Started</div>
              </Link>
              <Link href="https://primeumaton.org/#about">
              <div className=" mt-12  border-gray-100 p-3 border text-white rounded-lg opacity-70 cursor-pointer">Contact Developer</div>
              </Link>
              </div>
            </div>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default page