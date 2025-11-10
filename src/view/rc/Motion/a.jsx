import CSSMotion from 'rc-motion'
import { useState } from 'react'

function RcApp() {
  const [visible, setVisble] = useState(false)

  const handleOpen = () => {
    console.log('打开')
    setVisble(!visible)
  }

  return (
    <div>
      {/* A */}
      <div className="cursor-pointer" onClick={handleOpen}>打开</div>
      <CSSMotion visible={visible} motionName="my-motion">
        {({ className, style }) => (
          <div className={className} style={style}>
            测试
          </div>
        )}
      </CSSMotion>
    </div>
  )
}

export default RcApp
