'use client'
import React, {Fragment, useState} from 'react'


export default function CreateTaskModal () {
  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <>
      {showModal && (<div className='bg-black/30 min-h-screen min-w-screen' onClick={()=>{setShowModal(false)}}/>)}
    </>
  )
}