import { useEffect, useRef, useState } from 'react'

function CountTest1() {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  // console.log('力量', timer)

  function countFn() {
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }

  useEffect(() => {
    countFn()

    return () => {
      clearInterval(timer.current)
    }
  }, [])

  return (
    <>
      <div>计数器</div>
      <div>{count}</div>
    </>
  )
}

export default CountTest1
