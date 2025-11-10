import { useState, useTransition } from 'react'

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [isPending, startTransition] = useTransition()

  function handleChange(e) {
    const input = e.target.value
    setValue(input) // 高优先级

    startTransition(() => {
    // 低优先级
      const newList = Array.from({ length: 5000 }).fill(null).map((_, i) => input + i)
      console.log('newList', newList)
      setList(newList)
    })
  }

  return (
    <div>
      <input className="border" value={value} onChange={handleChange} />
      {isPending && <div>加载中...</div>}

      <div className="text-[#f00]">
        {list.map(item => <div key={item}>{item}</div>)}
      </div>
    </div>
  )
}

export default App
