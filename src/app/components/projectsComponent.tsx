import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Project } from '../types/skillsType'

const ProjectsComponent = (props:Project) => {
  return (
    <div className='mb-5'>
        <section className={`text-white hover:scale-110 duration-700 w-[95%] mx-auto lg:w-[90%] mb-5 flex flex-col items-center rounded-2xl gap-3 text-center min-h-[50vh] md:min-h-[60vh] bg-slate-700`}>
            <Link href={props.link} className={` flex justify-center items-center`}
             target='_blank'>
                <Image className='rounded-tr-2xl rounded-tl-2xl h-72' src={props.image} alt={props.head} width={500} height={500}/>
            </Link>
            <Link href={props.link} target='_blank'>
            <h1 className='text-2xl cursor-pointer font-semibold text-lime-600 hover:text-lime-400'>{props.head}</h1>
            </Link>
            <p className='text-lg text-center'>{props.desc}</p>
        </section>
    </div>
  )
}

export default ProjectsComponent