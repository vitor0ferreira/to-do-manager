'use client'

import RemoveButton from "@/components/RemoveButton";
import Task from "@/components/Task";
import { useState } from "react";

export default function Home() {
  
  const [showTasks, setShowTasks] = useState<boolean>(true)

  return (
    <main className="flex flex-col items-center justify-start pt-8 gap-8 min-h-screen min-w-screen">
        <h1 className='block font-extrabold text-4xl'>
          TO DO MANAGER
        </h1>
        <section className="flex gap-2">
          <button className='bg-green-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-green-600 shadow-md'>
            Add Task
          </button>
          <RemoveButton style='bg-red-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-red-600 shadow-md' visible={setShowTasks}>
            Remove ALL Tasks
          </RemoveButton>
        </section>
        {showTasks && (
          <section id='taskList' className='flex flex-col gap-2 h-max w-9/12 m-2'>
          <Task task='Example1' date='01/01/2024' priority='High' visible={showTasks} />
          <Task task='Example2' date='30/04/2024' priority='Medium' visible={showTasks} />
          <Task task='Example3' date='4/08/2024' priority='Low' visible={showTasks} />
          <Task task='Example4' date='21/11/2024' priority='High' visible={showTasks} />
        </section>
        )}
    </main>
  )
}
