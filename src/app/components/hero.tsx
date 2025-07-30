"use client"
import Image from 'next/image'
import React from 'react'
import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect'
import dynamic from 'next/dynamic';

const Hero = () => {
    const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
  return (
    <main>   
        <div className='absolute inset-x-40 inset-y-20  mx-auto flex justify-between pt-30'>
            <div className=' max-w-2xl'>
                <h1 className='text-5xl font-bold text-white'>
                    My Self,
                    <TypewriterEffectSmooth words={[{ text: "Muhammad Rayyan Naveed" }]} />
                </h1>
                <h1  className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-amber-600 font-serif font-bold hover:uppercase hover:text-amber-400">
                    <Typewriter
                        options={{
                        strings: ['I am Frontend Developer.', 'And learning Agentic AI.'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </h1>
                <div className='flex gap-4'>
                <button className='bg-amber-600 cursor-pointer hover:bg-amber-500 text-white px-4 py-2 rounded h-10'>Get Started</button>
                <button className='bg-transparent cursor-pointer border hover:bg-amber-600 border-amber-600 text-white px-4 py-2 rounded h-10'>Learn More</button>
                </div>

            </div>
            <div className='relative h-80 w-80 flex items-center justify-center'>
                {/* Animated gradient background */}
                <div className="absolute inset-0 rounded-full blur-2xl animate-spin-slow z-0 bg-gradient-to-tr from-blue-400 via-amber-300 to-red-500" />
                {/* Image on top */}
                <Image
                    className='h-80 w-80 bg-cover rounded-full relative z-10'
                    src="/hero/rayyan.jpg"
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                />
            </div>
        </div>
    </main>
  )
}

export default Hero