import React from 'react'
import { com } from '../types/skillsType'

const ServeComponent = (props:com) => {
  return (
    <div>
    <section className={`text-white w-full lg:w-[90%] flex flex-col items-center rounded-xl gap-5 bg-slate-700 py-10 ${props.bgcol}`}>
        <div className={`rounded-full border-4 hover:rotate-[25deg] h-20 w-20 flex justify-center items-center`}>
            {props.atribute}   
        </div>
        <h1 className='text-2xl font-semibold'>{props.heading}</h1>
        <p className='text-lg text-center'>{props.desc}</p>
    </section>
</div>
  )
}

export default ServeComponent