'use client'

import RemoveButton from "./removeButton";
import React, { useState } from 'react'


export default function Task(props:any) {

  const [visible, setVisible] = useState<Boolean>(true)
  let priorityColor = ''

  switch (props.priority){
    case 'High': priorityColor = 'text-high'
      break
    case 'Medium': priorityColor = 'text-medium'
      break
    case 'Low': priorityColor = 'text-low'
  }
  
  return (
      <>
        {visible && (
          <article className='border-black flex justify-between border-t-2 border-b-2 p-1'>
            <span className='font-bold'>{props.task}</span>
            <span className='font-bold'>{props.date}</span>
            <span className={`${priorityColor} font-bold drop-shadow-lg`}> {props.priority}</span>
            <RemoveButton visible={setVisible}/>
          </article>
        )}
      </>
    )
}