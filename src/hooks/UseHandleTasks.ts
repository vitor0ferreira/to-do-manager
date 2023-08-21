'use client'
import { useState } from "react"

export function UseHandleTasks(){

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

  return { taskList, addTask, removeAllTasks }
}

