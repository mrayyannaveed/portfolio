
// "use client"
// import Image from 'next/image'
// import React from 'react'
// import { TypewriterEffect, TypewriterEffectSmooth } from './ui/typewriter-effect'
// import dynamic from 'next/dynamic';

// const Hero = () => {
//     const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });
//     return (
//     <main className=' max-w-7xl mx-auto'>
//         <div className="flex flex-col-reverse lg:flex-row lg:grid lg:grid-cols-2  justify-between items-center gap-12 px-6">
//             <div className="space-y-4 max-w-2xl flex-1">
//                 <h1 className="text-5xl font-bold text-white">
//                     My Self,
//                     {/* <TypewriterEffectSmooth words={[{ text: "Muhammad Rayyan Naveed" }]} /> */}
//                 </h1>
//                 <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-white font-serif font-bold hover:uppercase hover:text-gray-200">
//                     <Typewriter
//                         options={{
//                             strings: ['I am Frontend Developer.', 'And learning Agentic AI.'],
//                             autoStart: true,
//                             loop: true,
//                         }}
//                     />
//                 </h1>
//                 <div className="flex gap-4 pt-2">
//                     <button className="bg-amber-600 cursor-pointer hover:bg-amber-500 text-white px-4 py-2 rounded h-10">Get Started</button>
//                     <button className="bg-transparent cursor-pointer border hover:bg-amber-600 border-amber-600 text-white px-4 py-2 rounded h-10">Learn More</button>
//                 </div>
//             </div>
            // <div className='relative h-80 w-80 flex items-center justify-center'>
            //     <div className="absolute inset-0 rounded-full blur-2xl animate-spin-slow z-0 bg-gradient-to-tr from-blue-400 via-amber-300 to-red-500" />
            //     <Image
            //         className='h-80 w-80 bg-cover rounded-full relative z-10'
            //         src="/hero/rayyan.jpg"
            //         alt="Hero Image"
            //         width={1000}
            //         height={1000}
            //     />
            // </div>
//         </div>
//     </main>
//     )
// }

// export default Hero

"use client";

import React from "react";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div className="mt-10 lg:mt-0">
      <section className="flex lg:justify-evenly flex-col-reverse lg:flex-row items-center h-[85vh] ">
        <section className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] gap-5 bg-blue-30 flex flex-col items-center lg:items-start">
            <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5 text-lime-500 font-serif font-bold hover:uppercase hover:text-lime-400 w-[90%] sm:w-[70%] md:w-[65%] lg:w-full">
                <div>
                <h1 className="flex items-center leading-relaxed">Hello,</h1>
                <Typewriter
                    options={{
                    strings: ['My Self M Rayyan Naveed...', 'I am Frontend Developer...'],
                    autoStart: true,
                    loop: true,
                    }}
                />
                </div>
            </h1>
            <div className="w-[90%] sm:w-[70%] md:w-[65%] lg:w-[60%] md:text-center lg:text-left">
                <p className="mb-8 leading-relaxed text-white">Final-year student at Dawood University of Engineering & Technology and passionate Frontend Developer skilled in Frontend Development. Experienced in building clean, user-friendly web apps and e-commerce backends using Sanity.io. Currently exploring Agentic AI through GIAIC to shape the future of intelligent software.</p>
            </div>
            <div className="flex gap-12 animate-pulse">
                <Link className="bg-slate-700 rounded-3xl py-2 px-4 flex justify-center items-center text-center hover:bg-slate-800" href={"https://github.com/mrayyannaveed"} target="_blank">
                    <FaGithub className="text-2xl text-white"/>
                </Link>
                <Link className="bg-blue-600 rounded-3xl py-2 px-4 flex justify-center items-center text-center hover:bg-blue-700" href={"https://www.linkedin.com/in/muhammad-rayyan-naveed-63090b329/"} target="_blank">
                <FaLinkedin className="text-2xl text-white"/>
                </Link>
            </div>
        </section>
            <div className='relative h-80 w-80 flex items-center justify-center'>
                <div className="absolute inset-0 rounded-full blur-2xl animate-spin-slow z-0 bg-gradient-to-tr from-blue-400 via-amber-300 to-red-500" />
                <Image
                    className='h-72 w-72 rounded-full relative z-10'
                    src="/hero/rayyan.jpg"
                    alt="Hero Image"
                    width={1000}
                    height={1000}
                />
            </div>
      </section>
    </div>
  );
};

export default Hero;