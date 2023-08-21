import AddTaskButton from "./AddTaskButton";


export default function TaskForm () {
  
  return (
    <form action="" className="flex items-center gap-4">
      <label htmlFor="taskInput">Task</label>
      <input type="text" id="taskInput" className="bg-slate-200 rounded-sm h-6 focus:outline-0 p-1"/>

      <label htmlFor="dataInput">Date</label>
      <input type="date" id="dataInput" className="bg-slate-200 rounded-sm h-6 focus:outline-0 p-1" />

      <label htmlFor="priorityInput">Priority</label>
      <input type="range" min="0" max="100" step="50" id="priorityInput"/>

      <AddTaskButton/>
    </form>
  )
}