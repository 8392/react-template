import { useEffect, useState } from 'react'

function TestSlot() {
  const [listData, setListData] = useState<{ id: number; name: string }[]>([])

  useEffect(() => {
    async function getListData() {

      console.log('执行次数')

      const data = [
        { id: 1, name: '成都' },
        { id: 2, name: '北京' },
        { id: 3, name: '上海' },
        { id: 4, name: '广州' },
      ]
      setListData(data)
    }

    getListData()
  }, [])

  return (
    <div>
      <h2>测试循环</h2>
      <div>
        {listData.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default TestSlot
