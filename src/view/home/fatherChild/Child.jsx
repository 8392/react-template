import { useImperativeHandle } from 'react'

function Child(props) {
  const { ref } = props
  // react19，不需要forwardRef，直接传ref进来

  useImperativeHandle(ref, () => ({
    getName: () => {
      return 'child'
    },
  }))

  return (
    <div className={props.className}>
      <div>child</div>
    </div>
  )
}

export default Child
