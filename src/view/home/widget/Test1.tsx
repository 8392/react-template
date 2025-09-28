import { useMemo, useState } from 'react'

function Test1() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }

  console.log('render Test1')
  const num = useMemo(() => {
    console.log('计算num')
    return count + 10
  }, [count])

  return (
    <div>
      <div>
        测试
        {num}
      </div>
      <button onClick={handleAdd}>点击</button>
    </div>
  )
}

export default Test1
