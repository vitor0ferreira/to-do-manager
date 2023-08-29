'use client'
import AddTaskButton from "./AddTaskButton";
import { UseHandleTasks, Task } from "@/hooks/UseHandleTasks";
import {useState} from 'react'

export default function TaskForm () {
  const [taskContent, setTaskContent] = useState<string>('')
  const [taskDate, setTaskDate] = useState<string>('')
  const [taskPriority, setTaskPriority] = useState<string>('')
  const { addTask } = UseHandleTasks()

  function addNewTask(e:any) {

    if(taskContent != '' && taskDate != '' && taskPriority != ''){

      let newTask:Task = {
        title:taskContent,
        date:taskDate,
        priority:taskPriority
      }

      console.log(newTask)
      addTask(newTask)

    }else{
      alert('PREENCHA TODOS OS CAMPOS CORRETAMENTE');
      return
    }
  }

  return (
    <form onSubmit={addNewTask} className="flex items-center gap-4">
      <label htmlFor="taskInput">Task</label>
      <input type="text" id="taskInput" className="bg-slate-200 rounded-sm h-6 focus:outline-0 p-1"
        onChange={(e)=>{setTaskContent(e.target.value)}}
        value={taskContent}
      />

      <label htmlFor="dateInput">Date</label>
      <input type="date" id="dateInput" className="bg-slate-200 rounded-sm h-6 focus:outline-0 p-1"
        onChange={(e)=>{setTaskDate(e.target.value)}}
        value={taskDate}
      />

      <label htmlFor="priorityInput">Priority</label>
      <input type="range" min="0" max="100" step="50" id="priorityInput"
        onChange={(e)=>{setTaskPriority(e.target.value)}}
        value={taskPriority}
      />

      <AddTaskButton/>
    </form>
  )
}