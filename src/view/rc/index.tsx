import { useEffect, useRef, useState } from 'react'

export default function App() {
  const [isShow, setShow] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (contentRef.current) {
      // 动态设置 maxHeight，实现平滑展开/收起
      setHeight(isShow ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isShow])

  return (
    <div className="p-4">
      <div
        className="mb-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShow(!isShow)}
      >
        {isShow ? '收起' : '展开'}
      </div>

      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        {/* 子元素可以任意高度 */}
        <div className="bg-gray-200 p-4">
          <p>这里可以放任意内容，比如图片、文字等。</p>
          <p>可以随意增加高度，动画都不会被裁剪。</p>
          <p>Tailwind + 动态高度动画</p>
        </div>
      </div>
    </div>
  )
}
