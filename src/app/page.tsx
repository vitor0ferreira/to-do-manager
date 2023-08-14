'use client'

import AddTaskButton from "@/components/AddTaskButton";
import RemoveButton from "@/components/RemoveButton";
import Task from "@/components/Task";
import { useState } from "react";

export default function Home() {

  type Priority = 'high' | 'medium' | 'low'

  interface Task {
    title:string,
    date:Date,
    priority:Priority
  }

  let task1:Task = {
    title:'Cozinhar',
    date: new Date('01-01-23'),
    priority:'high'
  }
  
  const [taskList, setTaskList] = useState<Array<Task | null>>([task1, task1, task1])
  
  const addTask = (task:Task) => {
    setTaskList([...taskList, task])
  }

  const removeAllTasks = () => {
    setTaskList([])
  }

  return (
    <main className="flex flex-col items-center justify-start pt-8 gap-8 min-h-screen min-w-screen">
        <h1 className='block font-extrabold text-4xl'>
          TO DO MANAGER
        </h1>
        <section className="flex gap-2">
          <AddTaskButton/>
          <RemoveButton style='bg-red-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-red-600 shadow-md' remove={removeAllTasks}>
            Remove ALL Tasks
          </RemoveButton>
        </section>
        <section id='taskList' className='flex flex-col bg-indigo-100 shadow-lg overflow-hidden min-h-[10rem] gap-1 h-max w-9/12 m-2'>
          {taskList && taskList.map((task, index)=>(
            <Task task={task} key={index}/>
          ))}
        </section>
    </main>
  )
}
