import { useState } from 'react'
import AccordionItem from './AccordionItem'

function Accordion({ items = [] }) {
  const [activeKey, setActiveKey] = useState(null)

  const toggle = (key) => {
    setActiveKey(prev => (prev === key ? null : key))
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          isOpen={activeKey === index}
          title={item.title}
          content={item.content}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  )
}

export default Accordion
