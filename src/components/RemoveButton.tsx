'use client'

export default function RemoveButton({props, children, visible, style}: any) {
  
  function removeTask() {
    if(typeof visible == "boolean") {
      visible = false
      console.log(visible)
    }
    else
      visible(false)
  }

  return (
    <button className={style} onClick={()=>{removeTask()}}>{children}</button>
  )
}