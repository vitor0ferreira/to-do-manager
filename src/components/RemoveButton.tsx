'use client'

export default function RemoveButton({props, children, remove, style}: any) {

  return (
    <button className={style} onClick={()=>{remove()}}>{children}</button>
  )
}