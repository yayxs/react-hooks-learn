import { useState } from 'react'
import { createRoot } from 'react-dom/client'
const d = document.getElementById('root')

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchUsers = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://reqres.in/api/users/')
      const json = await res.json()
      console.log(json)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }

  return (
    <div className='user-list'>
      <button onClick={fetchUsers}>fetch-data</button>
    </div>
  )
}

createRoot(d).render(<UserList />)
