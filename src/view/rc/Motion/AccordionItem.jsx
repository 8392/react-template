import CSSMotion from 'rc-motion'
import './a.css'

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border rounded overflow-hidden">
      {/* Header */}
      <div
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
      >
        <span>{title}</span>

        {/* 箭头旋转 */}
        <span
          className={`transform transition-transform ${
            isOpen ? 'rotate-90' : 'rotate-0'
          }`}
        >
          ▶
        </span>
      </div>

      {/* Motion 控制高度 */}
      <CSSMotion
        visible={isOpen}
        motionName="accordion"
        motionAppear
      >
        {({ style, className }) => (
          <div
            className={`overflow-hidden bg-white px-4 transition-all ${className}`}
            style={{ overflow: 'hidden', ...style }}
          >
            <div className="px-4 py-3 bg-white text-gray-700">
              {content}
            </div>
          </div>
        )}
      </CSSMotion>
    </div>
  )
}

export default AccordionItem
