import { useReducer, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
const d = document.getElementById('root')

function reducer(state, action) {
  if (action.type === 'add') {
    return {
      age: state.age + 1
    }
  }
  throw Error('no action')
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 12 })

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'add' })
        }}
      ></button>
      <p> {state.age} </p>
    </>
  )
}

function createInit(username) {
  const init = []
  for (let i = 0; i < 50; i++) {
    init.push({
      id: i,
      text: `${username} ${i + 1}`
    })
  }
  return {
    draft: '',
    todos: init
  }
}

function r(state, action) {
  switch (action.type) {
    case 'changed_draft':
      {
        return {
          draft: action.nextDraft,
          todos: state.todos
        }
      }

      break
    case 'add_todo':
      {
        return {
          draft: '',
          todos: [
            {
              id: state.todos.length,
              text: state.draft
            },
            ...state.todos
          ]
        }
      }

      break
    default:
      break
  }
}

function TodoList({ username = 'zhangsan' }) {
  const [state, dispatch] = useReducer(r, username, createInit)

  return (
    <>
      <input
        type='text'
        value={state.draft}
        onChange={(e) => {
          dispatch({ type: 'changed_draft', nextDraft: e.target.value })
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'add_todo' })
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </>
  )
}

// 创建初始值
function createObj(params) {
  console.log('初始化的函数')
  return {
    name: 'zhangsan',
    isTest: true
  }
}
function myReducer(state, action) {
  const { type, nextName } = action
  switch (type) {
    case 'change_name': {
      // state.name = action.nextName

      // return state
      return {
        name: nextName
      }
    }

    default:
      break
  }
}

function Sim() {
  console.log('sim render')
  const [state, dispatch] = useReducer(myReducer, null, createObj)
  return (
    <>
      <div>
        <button
          onClick={() => dispatch({ type: 'change_name', nextName: 'lisi' })}
        >
          {' '}
          change nname
        </button>
        <p>{state.name}</p>
      </div>
    </>
  )
}

createRoot(d).render(
  <StrictMode>
    <Sim />
  </StrictMode>
)
