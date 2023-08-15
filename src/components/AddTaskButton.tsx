

export default function AddTaskButton (props:any) {

  const showModal = props.handleModal

  return (
    <button className='bg-green-500 text-md rounded-md py-1 px-2 font-bold text-white hover:bg-green-600 shadow-md' onClick={showModal}>
      Add Task
    </button>
  )
}