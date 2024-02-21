
import {FaDeleteLeft} from 'react-icons/fa6'

export default function TaskCard({props, task, remove}:any) {

  interface PriorityColors {
    text: string
    bg: string
  }

  let priorityColor: PriorityColors = {text:'', bg:''}

  switch (task.priority){
    case 'high':
      priorityColor.text = 'text-red-600'
      priorityColor.bg = 'bg-red-600'
      break
    case 'medium':
      priorityColor.text = 'text-amber-500'
      priorityColor.bg = 'bg-amber-500'
      break
    case 'low':
      priorityColor.text = 'text-green-600'
      priorityColor.bg = 'bg-green-600'
      break
  }
  
  return (
    <article className="border-white grid gap-4 grid-cols-5 border-b-4">
      <div className={`${priorityColor.bg} w-6 aspect-square`} />
      <span className="font-bold ">{task.title}</span>
      <span className="font-bold ">{task.date}</span>
      <span className={`${priorityColor.text} font-bold drop-shadow-lg`}>
        Prioridade
      </span>
      <button className="text-red-500 bg-slate-400 p-2" onClick={()=>remove(task.id)}>
        <FaDeleteLeft />
      </button>
    </article>
  );
}