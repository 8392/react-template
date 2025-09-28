import { useRef } from 'react'
import Child from './Child'

export default function Father() {
  const childRef = useRef(null)

  function handleGetChild() {
    // if (childRef.current) {
    // childRef.current.showAlert()
    // }

    const name = childRef.current.getName()
    console.log(name)
  }

  return (
    <div>
      <div className="cursor-pointer" onClick={handleGetChild}>获取子组件的方法</div>
      <Child ref={childRef} className="text-[#f00]" />
    </div>
  )
}
