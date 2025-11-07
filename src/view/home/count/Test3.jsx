import { useMemo, useState } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  const doubleNum = useMemo(() => {
    console.log('计算 doubleNum')
    return num * 2
  }, [num]) // 只有 num 变化才重新计算

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <div onClick={() => setCount(count + 1)}>+Count</div>

      <p>
        Num:
        {num}
        , Double:
        {doubleNum}
      </p>
      <div onClick={() => setNum(num + 1)}>+Num</div>
    </div>
  )
}

export default Example
