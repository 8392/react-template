import { useNavigate } from 'react-router'
import userStore from '@/store/userStore'

function Home() {
  const navigatge = useNavigate()

  const { count, increase } = userStore()

  function handleDetail() {
    navigatge('/aboutDetail?id=123')
  }

  function handleAdd() {
    increase()
  }

  return (
    <div>
      <div>
        <button className="cursor-pointer" onClick={handleDetail}>详情</button>
        <div>
          <div>store测试</div>
          <div>
            {count}
          </div>
          <button className="cursor-pointer" onClick={handleAdd}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Home
