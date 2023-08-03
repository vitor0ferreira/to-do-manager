'use client'

import RemoveButton from "./RemoveButton";
import React, { useState } from 'react'


export default function Task(props:any) {

  interface PriorityColors {
    text: string
    bg: string
  }

  const [visible, setVisible] = useState<Boolean>(props.visible)
  let priorityColor: PriorityColors = {text:'', bg:''}

  switch (props.priority){
    case 'High':
      priorityColor.text = 'text-red-600'
      priorityColor.bg = 'bg-red-600'
      break
    case 'Medium':
      priorityColor.text = 'text-amber-500'
      priorityColor.bg = 'bg-amber-500'
      break
    case 'Low':
      priorityColor.text = 'text-green-600'
      priorityColor.bg = 'bg-green-600'
      break
  }
  
  return (
      <>
        {visible && (
          <article className='border-black grid gap-4 grid-cols-5 border-t-2 border-b-2'>
            <div className={`${priorityColor.bg} w-6 aspect-square`}/>
            <span className='font-bold '>{props.task}</span>
            <span className='font-bold '>{props.date}</span>
            <span className={`${priorityColor.text} font-bold drop-shadow-lg`}>{props.priority}</span>
            <RemoveButton visible={setVisible} style='text-red-500 font-bold'>
              X
            </RemoveButton>
          </article>
        )}
      </>
    )
}