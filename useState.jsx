import { useState } from 'react'
import { createRoot } from 'react-dom/client'

const a = 1

function DemoState() {
  //
  // const [number, setNumber] = useState(0)
  const [number, setNumber] = useState(() => {
    return a === 1 ? 1 : 2
  })

  return (
    <div>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber(number + 1)
          console.log(number)
        }}
      >
        {number}
      </button>
    </div>
  )
}

const d = document.getElementById('root')
createRoot(d).render(<DemoState />)
