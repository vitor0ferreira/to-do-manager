'use client'

export default function RemoveButton(props:any) {
  
  function removeTask() {
    props.visible(false)
  }

  return (
    <button className='text-red-500 font-bold' onClick={()=>{removeTask()}}>X</button>
  )
}