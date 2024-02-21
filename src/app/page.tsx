'use client';

import LoadingCircle from "@/components/LoadingCircle";
import TaskCard from "@/components/Task/TaskCard";
import { useEffect, useState } from "react";

interface Task {
  id: string,
  title: string,
  date: string,
  createdAt: Date,
  priority: string
}

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>(()=>{
    const savedTasks = localStorage.getItem('tasks')
    if(savedTasks){
      return JSON.parse(savedTasks)
    }
    return null
  })

  function createTask([title, date, priority]:string[]) {

    const newTask = {
      id: crypto.randomUUID(),
      title,
      date,
      createdAt: new Date(),
      priority
    }
    const taskArray = tasks ? [newTask, ...tasks] : [newTask]
    setTasks(taskArray)
  }

  function removeTask(id: string) {
    const taskArray = tasks.filter((task)=>{
      return task.id !== id
    })
    setTasks(taskArray)
  }

  const novaTask = ['titulo', 'data', 'high']

  if (tasks !== null) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  return (
    <main className="flex flex-col items-center justify-start pt-8 gap-8 min-h-screen min-w-screen">
      <h1 className="block font-extrabold text-4xl">TO DO MANAGER</h1>
      <section className="flex gap-2">
        <button type="button" onClick={()=>setTasks([])} className="bg-red-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-red-600 shadow-md">
          Remove All Tasks
        </button>
      </section>
      <button
        type="button"
        onClick={() => createTask(novaTask)}
        className="p-2 font-bold bg-slate-700 text-white"
      >
        Criar nova task
      </button>
      <section
        id="taskSection"
        className="flex flex-col justify-start relative p-4 bg-indigo-100 overflow-hidden gap-2 h-max w-9/12 m-2"
      >
        {tasks.map((task)=>{
          return <TaskCard key={task.id} task={task} remove={removeTask}/>
        })}
      </section>
    </main>
  );
}
