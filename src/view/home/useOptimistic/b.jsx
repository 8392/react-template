import {
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'

function Show() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const heightPx = 200 // 明确使用数值
    ref.current.style.height = `${heightPx}px`
    ref.current.style.marginTop = `${(window.innerHeight - heightPx) / 2}px`
  }, [])

  return (
    <div ref={ref} style={{ height: '50px', background: 'lightblue' }}>
      内容
    </div>
  )
}

export default Show
