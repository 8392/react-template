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

### 更新state数组和对象，多层嵌套，不要改变原值，导致渲染出问题，因为react渲染的时候会比较更新后的值和更新前的值，来看是否重新渲染

1. 使用`immer` 和`use-immer`这两个包，来直接直接修改原数据和对象实现更新
2. 在状态管理`zustand`也可以直接使用`immer`
3. import { immer } from 'zustand/middleware/immer'

- 使用方式

```jsx
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const useBeeStore = create(
  immer((set) => ({
    bees: 0,
    addBees: (by) =>
      set((state) => {
        state.bees += by
      }),
  })),
)
```


### `clsx`这个库是动态改变元素的className的属性

### react组件名称必须大写，不然eslint识别到这个函数不是组件，报红