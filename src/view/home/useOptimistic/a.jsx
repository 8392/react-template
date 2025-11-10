import { startTransition, useOptimistic, useState } from 'react'

function TodoApp() {
  const [todosState, setTodosState] = useState([
    { id: 1, city: '成都' },
    { id: 2, city: '重庆' },
    { id: 3, city: '北京' },
  ])

  // 增加对“rollback 指令”的支持
  const [optimisticTodos, updateOptimisticTodos] = useOptimistic(
    todosState,
    (state, arg) => {
      // arg 可以是普通的 deletedId，也可以是 { __restore: prevArray }
      if (arg && arg.__restore)
        return arg.__restore
      return state.filter(t => t.id !== arg)
    },
  )

  function deleteApi() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('错误'))
        // resolve(66)
      }, 300)
    })
  }

  async function handleDelete(id) {
    // 先保存一份快照用于可能的回滚
    const prevSnapshot = todosState

    // 乐观 UI（放在 transition 中以满足 React 要求）
    startTransition(() => {
      updateOptimisticTodos(id)
    })

    try {
      await deleteApi(id)

      // 成功 -> 提交最终的 baseValue（这会让 optimistic 成为真实）
      setTodosState(prev => prev.filter(t => t.id !== id))
    }
    catch (err) {
      console.log('失败，回滚')

      // 回滚：通过特殊 arg 把 optimistic 状态直接恢复为 prevSnapshot
      startTransition(() => {
        updateOptimisticTodos({ __restore: prevSnapshot })
      })
    }
  }

  return optimisticTodos.map(todo => (
    <div key={todo.id}>
      <div className="cursor-pointer" onClick={() => handleDelete(todo.id)}>
        {todo.city}
      </div>
    </div>
  ))
}

export default TodoApp
