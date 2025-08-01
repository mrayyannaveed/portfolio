import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font opacity-80 bg-gray-900/80">
  <div className="container px-5 py-8 mx-auto flex items-center justify-center sm:flex-row flex-col">
    <Link href={''} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
      <span className="ml-3 text-xl">Muhammad Rayyan</span>
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2025 rayyannaveed33@gmail.com —
      <Link href="https://www.instagram.com/rayyan_naveed_10/profilecard/?igsh=dHdiN2hraGZuNm44" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@insta</Link>
    </p>
    <span className="inline-flex gap-3 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <Link className="bg-slate-700 rounded-3xl py-2 px-4 flex justify-center items-center text-center hover:bg-slate-800" href={"https://github.com/mrayyannaveed"} target="_blank">
        <FaGithub className="text-2xl text-white"/>
    </Link>
    <Link className="bg-blue-600 rounded-3xl py-2 px-4 flex justify-center items-center text-center hover:bg-blue-700" href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target="_blank">
        <FaLinkedin className="text-2xl text-white"/>
    </Link>
    </span>
  </div>
</footer>
  )
}

export default Footer