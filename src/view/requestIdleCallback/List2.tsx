import { useEffect, useRef, useState } from 'react'

function List2() {
  const allItems = useRef(
    Array.from({ length: 10000 }, (_, i) => `Item ${i}`),
  )

  const [visibleItems, setVisibleItems] = useState([])

  useEffect(() => {
    setVisibleItems(allItems.current)
  }, [])

  return (
    <div>
      <h2>List 2</h2>
      <ul>
        {visibleItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List2
