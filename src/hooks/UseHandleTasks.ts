'use client'
import { useState } from "react"


export interface Task {
  title:string,
  date:string,
  priority:string
}


export function UseHandleTasks(){
  
  let task1:Task = {
    title:'Cozinhar',
    date: '20-03-2020',
    priority:'high'
  }

  const [taskList, setTaskList] = useState<Array<Task | null>>([task1, task1, task1])

  const addTask = (task:Task) => {
    setTaskList([...taskList, task])
  }

  const removeAllTasks = () => {
    setTaskList([])
  }

  return { taskList, addTask, removeAllTasks }
}

