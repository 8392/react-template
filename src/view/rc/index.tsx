import React, { useEffect, useRef, useState } from 'react'

function CollapseTransition({ in: inProp, children, duration = 300 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(inProp)
  const [height, setHeight] = useState(inProp ? 'auto' : '0px')
  const [opacity, setOpacity] = useState(inProp ? 1 : 0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el)
      return

    let timer

    if (inProp) {
      // 展开
      setVisible(true)
      setAnimating(true)
      setHeight('0px')
      setOpacity(0)

      timer = setTimeout(() => {
        const scrollHeight = el.scrollHeight
        setHeight(`${scrollHeight}px`)
        setOpacity(1)
      }, 10)

      const handleTransitionEnd = () => {
        setHeight('auto') // 高度自适应
        setAnimating(false)
        el.removeEventListener('transitionend', handleTransitionEnd)
      }
      el.addEventListener('transitionend', handleTransitionEnd)
    }
    else {
      // 收起
      if (height === 'auto') {
        const scrollHeight = el.scrollHeight
        setHeight(`${scrollHeight}px`)
      }

      setAnimating(true)
      setOpacity(1)

      timer = setTimeout(() => {
        setHeight('0px')
        setOpacity(0)
      }, 10)

      const handleTransitionEnd = () => {
        setVisible(false) // 隐藏元素
        setAnimating(false)
        el.removeEventListener('transitionend', handleTransitionEnd)
      }
      el.addEventListener('transitionend', handleTransitionEnd)
    }

    return () => clearTimeout(timer)
  }, [inProp])

  return (
    <div
      ref={ref}
      style={{
        overflow: 'hidden',
        height,
        opacity,
        transition: `all ${duration}ms ease`,
        display: visible || animating ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <div className="cursor-pointer" onClick={() => setShow(!show)}>Toggle</div>
      <CollapseTransition in={show}>
        <div style={{ padding: '16px', background: '#f0f0f0' }}>
          这是要展开的内容
        </div>
      </CollapseTransition>
    </div>
  )
}
