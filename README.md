### eslint配置了，但是没有自动格式化的问题，配置这个，然后再试一下

```json
{
  // 保存时自动格式化
  "editor.formatOnSave": true,

  // 保存时自动运行 ESLint 修复
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },

  // 让 VSCode 默认用 ESLint/Prettier 格式化
  "eslint.validate": ["javascript", "typescript", "javascriptreact", "typescriptreact"]
}
```



### react19，使用的路由直接用react-router，不需要用react-router-dom，react-router已经包含了所有的react-router-dom的功能

1. 路由跳转

```ts
import { useNavigate } from 'react-router'

function Home() {
  const navigatge = useNavigate()

  function handleDetail() {
    navigatge('/aboutDetail?id=123')
  }

  return (
    <div>
      <div>
        <button className="cursor-pointer" onClick={handleDetail}>详情</button>
      </div>
    </div>
  )
}

export default Home

```
2. 获取query参数

```ts

import { useSearchParams } from 'react-router'

function Home() {
  const [search] = useSearchParams()
  console.log('search', search.get('id'))

  return (
    <>
      <div className="text-[20px] text-[#f00]">详情</div>
    </>
  )
}

export default Home

```


### react19新的状态管理，`zustand`

1. 直接像vue3的pinia一样的使用，很方便，同步异步一起处理

```ts
import { create } from 'zustand'

interface CounterState {
  count: number
  increase: () => void
  decrease: () => void
}

const useUserStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}))

export default useUserStore;

```

2. 使用

```ts

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

```

<!-- 前端面试全家桶 -->


### 高级前端工程师学习总结


- 前端发展，职业发展最新动态

1. 招聘网站
2. 技术博客
3. 国内外论坛

### 职业规划

1. 持续学习
2. 建立自己的作品集
3. 适当的社交，