import { useMemo } from 'react'

function TestSlot(props) {
  const fatherCount = useMemo(() => {
    return props.count + 100
  }, [props.count])

  return (
    <div>
      父组件的count:
      {fatherCount}
      <div>
        {props.header('作用域插槽传参')}
      </div>
      <div>
        {props.children}
      </div>
      <div>
        {props.footer}
      </div>
    </div>
  )
}

export default TestSlot
