import { useMemo, useState } from 'react'
import Father from './fatherChild/Father'
import { message } from './widget/Message'
import Test1 from './widget/Test1'
import TestFor from './widget/TestFor'
import TestSlot from './widget/TestSlot'

function Home() {
  const [count, setCount] = useState(0)

  function handleAdd() {
    setCount(count + 1)
  }
  return (
    <>
      {/* <div>我是首页</div>
      <div>
        <div className="cursor-pointer" onClick={handleAdd}>更新</div>
      </div>
      <Test1 />
      <TestSlot
        count={count}
        header={value => <div>{value}</div>}
        footer={<div>footer</div>}
      >
        <div className="text-[#f00]">我是插槽</div>
      </TestSlot>
      <TestFor />
      <div className="cursor-pointer" onClick={() => message.success('成功消息')}>消息提示</div> */}
      <Father />
    </>
  )
}

export default Home
