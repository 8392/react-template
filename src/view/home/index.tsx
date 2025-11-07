import * as react from 'react'
import * as reactRouter from 'react-router'
import CountTest1 from './count/Test1'
import CountTest2 from './count/Test2'
import CountTest3 from './count/Test3'
import CountTest4 from './count/Test4'
import Father from './fatherChild/Father'
import { message } from './widget/Message'
import Test1 from './widget/Test1'
import TestFor from './widget/TestFor'
import TestSlot from './widget/TestSlot'

const { useState } = react
window.reactRouter = reactRouter
window.react = react

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
      {/* <Father /> */}
      {/* <CountTest1 /> */}
      {/* <CountTest3 /> */}
      <CountTest4 />
    </>
  )
}

export default Home
