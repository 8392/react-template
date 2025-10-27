import { useState } from 'react'
import List1 from './List1'
import List2 from './List2'

function requestIdleCallback() {
  // return <div>requestIdleCallback</div>
  return <List2 />
}

export default requestIdleCallback
