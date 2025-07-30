import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 flex gap-7 items-center justify-end py-5 absolute inset-0 h-20 w-fit mx-auto rounded-2xl my-5'>
        <Link className='hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium p-2 rounded-2xl' href={'/about'}>About</Link>
        <Link className='hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium p-2 rounded-2xl' href={'/skills'}>Skills</Link>
        <Link className='hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium p-2 rounded-2xl' href={'/projects'}>Projects</Link>
        <Link className='hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium p-2 rounded-2xl' href={'/testimonials'}>Testimonials</Link>
        <Link className='hover:bg-gradient-to-br from-amber-400 to-pink-500 font-medium p-2 rounded-2xl' href={'/contact'}>Contact</Link>
    </nav>
  )
}

export default Navbar