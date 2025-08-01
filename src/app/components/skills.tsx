
import React from 'react'
import { DiHtml5 } from 'react-icons/di'
import SkillsComponent from './skillsComponent'
import { FaCss3Alt } from 'react-icons/fa'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiChainlink, SiPython, SiStreamlit, SiTypescript } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { com } from '../types/skillsType'

const SkillsCom = () => {
    let skillsCom: com[] = [
        {
            heading: "Html",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-pulse",
            atribute: <DiHtml5 className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-orange-700 to-orange-400"
        },
        {
            heading: "CSS",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-spin",
            atribute: <FaCss3Alt className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-blue-700 to-blue-400"
        },
        {
          heading: "Typescript",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          ani: "animate-pulse",
          atribute: <SiTypescript className='text-5xl'/>,
          bgcol: "bg-gradient-to-br from-blue-700 to-blue-800"
        },
        {
          heading: "Python",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          ani: "animate-pulse",
          atribute: <SiPython className='text-5xl'/>,
          bgcol: "bg-gradient-to-tr from-blue-800 to-yellow-400"
        },
        {
            heading: "Bootstrap",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-spin",
            atribute: <BsBootstrap className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-zinc-400 to-purple-800"
        },
        {
            heading: "Tailwind CSS",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-bounce",
            atribute: <RiTailwindCssFill className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-lime-400 to-zinc-800"
        },
        {
            heading: "NextJs",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-pulse",
            atribute: <RiNextjsFill className='text-5xl'/>,
            bgcol: "bg-gradient-to-br from-slate-400 to-zinc-800"
        },
        {
            heading: "Streamlit",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-bounce",
            atribute: <SiStreamlit className='text-5xl'/>,
            bgcol: "bg-gradient-to-tr from-zinc-800 to-slate-700"
        },
        {
            heading: "Chainlit",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            ani: "animate-spin",
            atribute: <SiChainlink className='text-5xl'/>,
            bgcol: "bg-gradient-to-tr from-yellow-600 to-red-800"
        },
    ]
  return (
    <div className='text-white'>
        <section className='flex flex-col items-center bg-yellow-5 py-20'>

            <h1 className="ml-3 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold text-white hover:text-lime-600 animate-bounce hover:uppercase text-center mt-20 mb-10">
                Skills
            </h1>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-10  lg:w-[90vw] w-[80vw] gap-5 mb-14'>
                {skillsCom.map((skills: com) => {
                    return(
                        <SkillsComponent key={skills.heading} head={skills.heading} desc={skills.desc} atr={skills.atribute} bg={skills.bgcol} ani={skills.ani}/>
                    )
                })}
            </section>
        </section>
    </div>
  )
}

export default SkillsCom