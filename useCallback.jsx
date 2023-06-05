import { useState, useCallback } from 'react'
import { createRoot } from 'react-dom/client'

function Counter() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')
  const handleAdd = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div>
      <button onClick={handleAdd}>{count}</button>
      <button onClick={handleChangeTheme}> change theme</button>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<Counter />)
