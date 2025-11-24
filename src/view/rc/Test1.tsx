import { useState, useRef, useLayoutEffect } from 'react';
import CSSMotion from 'rc-motion';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  accordion?: boolean;
}

export default function Accordion({ items, accordion = true }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (accordion) {
      setOpenIndex(openIndex === index ? null : index);
    } else {
      setOpenIndex(openIndex === index ? null : index); // 多开可扩展为数组
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      {items.map((item, index) => (
        <AccordionPanel
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        >
          {item.content}
        </AccordionPanel>
      ))}
    </div>
  );
}

function AccordionPanel({ title, children, isOpen, onClick }: any) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // 计算内容高度
  useLayoutEffect(() => {
    setTimeout(() => {
      if (contentRef.current) {
        setHeight(isOpen ? contentRef.current.scrollHeight : 0);
      }
    }, 0)
  }, [isOpen, children]);

  return (
    <div className="border rounded overflow-hidden">
      <button
        className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
        onClick={onClick}
      >
        {title}
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* CSSMotion 只负责 enter/leave 生命周期 */}
      <CSSMotion visible={isOpen} motionAppear motionDeadline={300}>
        {({ className, style: motionStyle }) => (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${className}`}
            style={{
              ...motionStyle,
              height, // 用动态高度控制展开/收起
            }}
          >
            <div ref={contentRef} className="p-4 bg-white">
              {children}
            </div>
          </div>
        )}
      </CSSMotion>
    </div>
  );
}
