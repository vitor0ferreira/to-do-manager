'use client'

import TaskCard from "@/components/Task/TaskCard";
import { useState } from "react";

interface Task {
  id: string,
  title: string,
  date: string,
  createdAt: string,
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
  const [titleInput, setTitleInput] = useState<string>('')
  const [dateInput, setDateInput] = useState<string>()
  const [radioInput, setRadioInput] = useState<string | number>(0)
  const priorityString: any = {
    0: 'low',
    50: 'medium',
    100: 'high'
  }

  function createTask([title, date, priority]:string[]) {

    const newTask = {
      id: crypto.randomUUID(),
      title,
      date,
      createdAt: new Date().toLocaleDateString(),
      priority
    }
    const taskArray = tasks ? [newTask, ...tasks] : [newTask]
    setTasks(taskArray)
    console.log(titleInput, dateInput, priorityString[radioInput])
    setDateInput('')
    setRadioInput(0)
    setTitleInput('')
  }

  function removeTask(id: string) {
    const taskArray = tasks.filter((task)=>{
      return task.id !== id
    })
    setTasks(taskArray)
  }


  if (tasks !== null) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const newTask = [titleInput, dateInput, priorityString[radioInput]]

  return (
    <main className="flex flex-col items-center justify-start p-8 gap-8 min-h-screen w-full">
      <h1 className="block font-extrabold text-4xl">TO DO MANAGER</h1>

      {/* New Task Form */}
      <form className="flex flex-wrap justify-evenly items-center gap-10 py-4 px-8 w-max max-w-[80%] rounded-md bg-slate-600">

        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="titleInput" className="text-slate-100">Title</label>
          <input id="titleInput" type="text" required value={titleInput} onChange={(e)=>setTitleInput(e.target.value)} className="bg-slate-100 focus-visible:outline-none p-2 h-6"/>
        </div>

        <div className="flex flex-col gap-1 font-semibold">
          <label htmlFor="dateInput" className="text-slate-100">Date</label>
          <input type="date" id="dateInput" required value={dateInput} onChange={(e)=>setDateInput(e.target.value)}  className="bg-slate-100 text-slate-900 focus-visible:outline-none p-2 h-6"/>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="priorityInput" className="font-semibold h-min text-slate-100">Priority</label>
          <input type="range" id="priorityInput" required min={0} max={100} step={50} value={radioInput} onChange={(e)=>setRadioInput(e.target.value)} list="radioMarkers" className="bg-slate-100 appearance-none cursor-pointer h-2 flex items-center rounded-full [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500"/>
          <datalist id="radioMarkers" className="flex justify-between text-sm text-slate-100">
            <option value="0" label="Low"></option>
            <option value="50" label="Medium"></option>
            <option value="100" label="High"></option>
          </datalist>
        </div>

      </form>

      <button
        type="button"
        onClick={() => {
          if(newTask[0] != '' && newTask[1] != '' && newTask[2] != undefined)
            createTask(newTask)
          else
            alert('Fill all the camps to create a new task')
        }}
        className="p-2 rounded-md font-bold bg-slate-700 text-white"
      >
        Create a new task
      </button>
      <section
        id="taskSection"
        className="flex flex-col justify-start relative p-4 bg-indigo-100 overflow-hidden gap-2 h-max w-max max-w-[80%] m-2"
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
        className="bg-red-500 text-md rounded-md p-2 mb-10 font-bold text-white hover:bg-red-600 shadow-md"
      >
        Remove All Tasks
      </button>
    </main>
  );
}
