'use client'
import { UseHandleTasks } from "@/hooks/UseHandleTasks";

export default function RemoveButton() {
  
  const { removeAllTasks } = UseHandleTasks()

  return (
    <button className='bg-red-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-red-600 shadow-md' 
        onClick={()=>removeAllTasks()}>
      Remove All Tasks
    </button>
  )
}