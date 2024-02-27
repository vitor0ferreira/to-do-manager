
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {FaDeleteLeft} from 'react-icons/fa6'

export default function TaskCard({props, task, removeTask}:any) {

  interface PriorityColors {
    text: string
    bg: string
  }

  let priorityColor: PriorityColors = {text:'', bg:''}

  switch (task.priority){
    case 'high':
      priorityColor.text = 'text-slate-50'
      priorityColor.bg = 'border-red-600'
      break
    case 'medium':
      priorityColor.text = 'text-slate-950'
      priorityColor.bg = 'border-amber-400'
      break
    case 'low':
      priorityColor.text = 'text-slate-50'
      priorityColor.bg = 'border-green-700'
      break
  }
  
  return (
    <article className={`grid grid-cols-5 p-2 rounded-md w-full border-t-2 border-slate-400/60 bg-cyan-50`}>
      <span className={`p-1 pr-2 border-r-4 ${priorityColor.bg}`}>
        {formatDistanceToNow(task.createdAt)}
      </span>
      <span className="p-1 pl-3 col-span-2">{task.title}</span>
      <span className="p-1 col-span-1">{task.date}</span>
      <button className="text-red-500 p-2 hover:text-amber-500 bg-slate-200 rounded-full w-8 justify-self-end" onClick={()=>removeTask(task.id)}>
        <FaDeleteLeft />
      </button>
    </article>
  );
}