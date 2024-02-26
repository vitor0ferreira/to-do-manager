'use client'

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

  const [radioInput, setRadioInput] = useState(0)

  return (
    <main className="flex flex-col items-center justify-start pt-8 gap-8 min-h-screen min-w-screen">
      <h1 className="block font-extrabold text-4xl">TO DO MANAGER</h1>

      {/* New Task Form */}
      <form action="" className="flex justify-evenly items-center gap-10 py-4 px-8 w-max rounded-md bg-slate-600">

        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="titleInput" className="text-slate-100">Title</label>
          <input id="titleInput" type="text" className="bg-slate-100 focus-visible:outline-none p-2 h-6"/>
        </div>

        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="dateInput" className="text-slate-100">Date</label>
          <input type="date" id="dateInput"  className="bg-slate-100 text-slate-900 focus-visible:outline-none p-2 h-6"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="priorityInput" className="font-semibold h-min text-slate-100">Priority</label>
          <input type="range" id="priorityInput" min={0} max={100} step={50} list="radioMarkers" className="bg-slate-100 appearance-none cursor-pointer h-2 flex items-center rounded-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500"/>
          <datalist id="radioMarkers" className="flex justify-between text-sm text-slate-100">
            <option value="0" label="Low"></option>
            <option value="50" label="Medium"></option>
            <option value="100" label="High"></option>
          </datalist>
        </div>

      </form>

      <button
        type="button"
        onClick={() => createTask(novaTask)}
        className="p-2 rounded-md font-bold bg-slate-700 text-white"
      >
        Criar nova task
      </button>
      <section
        id="taskSection"
        className="flex flex-col justify-start relative p-4 bg-indigo-100 overflow-hidden gap-2 h-max min-w-min w-max m-2"
      >
        {tasks[0] != null ? (
          tasks.map((task) => {
            return (
              <TaskCard key={task.id} task={task} removeTask={removeTask} />
            );
          })
        ) : (
          <span>Nenhuma nota adicionada.</span>
        )}
      </section>
      <button
        type="button"
        onClick={() => setTasks([])}
        className="bg-red-500 text-md rounded-md p-2 font-bold text-white hover:bg-red-600 shadow-md"
      >
        Remove All Tasks
      </button>
    </main>
  );
}
