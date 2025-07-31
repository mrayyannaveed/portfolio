import React from 'react'
import { CometCard } from '@/components/ui/comet-card'

const SkillsComponent = (props: any) => {
  return (
    <CometCard
      className={`${props.bg} text-white p-6 transition-all duration-300`}
      rotateDepth={20}
      translateDepth={25}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className={`rounded-full border-4 h-20 w-20 flex justify-center items-center ${props.ani}`}>
          {props.atr}
        </div>
        <h1 className="text-2xl font-semibold">{props.head}</h1>
        <p className="text-lg">{props.desc}</p>
      </div>
    </CometCard>
  )
}

export default SkillsComponent


