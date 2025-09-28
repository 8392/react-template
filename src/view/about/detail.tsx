import * as reactRouter from 'react-router'
import userStore from '@/store/userStore'

function Home() {
  const { useSearchParams } = reactRouter
  const [search] = useSearchParams()
  const { count } = userStore()

  console.log('search', search.get('id'))

  return (
    <>
      <div className="text-[20px] text-[#f00]">详情</div>
      <div>
        结果
        {count}
      </div>
    </>
  )
}

export default Home
