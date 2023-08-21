'use client'
import { UseHandleTasks } from "@/hooks/UseHandleTasks"
import Task from "./Task/Task"
import { useEffect, useState } from "react"
import LoadingCircle from "./LoadingCircle"

export default function TaskSection() {

  const [tasks, setTasks] = useState<any>()
  const { taskList } = UseHandleTasks()
  
  useEffect(()=>{
    setTasks(taskList)
  },[taskList])

  return (
    <section id='taskList' className='flex flex-col relative bg-indigo-100 shadow-lg overflow-hidden min-h-[10rem] gap-1 h-max w-9/12 m-2'>
      {tasks ? tasks.map((task:any, index:number)=>(
          <Task task={task} key={index}/>
      )) : <LoadingCircle/>}
    </section>
  )
}