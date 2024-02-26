
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
      priorityColor.bg = 'bg-red-600'
      break
    case 'medium':
      priorityColor.text = 'text-slate-950'
      priorityColor.bg = 'bg-amber-400'
      break
    case 'low':
      priorityColor.text = 'text-slate-50'
      priorityColor.bg = 'bg-green-700'
      break
  }
  
  return (
    <article className={`border-white flex items-center gap-4 p-2 rounded-md min-w-[500px] w-max ${priorityColor.bg} ${priorityColor.text}`}>
      <span className='font-bold'>{task.createdAt}</span>
      <span className="font-bold flex-1">{task.title}</span>
      <span className="font-bold ">{task.date}</span>
      <button className="text-red-500 p-2 hover:text-amber-500 bg-slate-200 rounded-full" onClick={()=>removeTask(task.id)}>
        <FaDeleteLeft />
      </button>
    </article>
  );
}