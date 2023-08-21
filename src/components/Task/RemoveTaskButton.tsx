
export default function RemoveTaskButton({props, children, style, remove}:any) {

  return (
    <button className={style} onClick={()=>{remove()}}>{children}</button>
  )
}