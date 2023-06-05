import { createContext, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
const d = document.getElementById('root')
const ThemeCtx = createContext(null)
function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeCtx.Provider value={theme}>
      <Form></Form>
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        use dark mode
      </label>
      {/* <Button
        onClick={() => {
          setTheme('light')
        }}
      >
        switch to light theme
      </Button> */}
    </ThemeCtx.Provider>
  )
}

function Form() {
  return (
    <Panel title=''>
      <Button>sign up</Button>
      <Button>log in</Button>
    </Panel>
  )
}

function Panel({ title, children }) {
  const theme = useContext(ThemeCtx)
  const className = 'panel-' + theme
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

function Button({ children }) {
  const theme = useContext(ThemeCtx)
  const className = 'button-' + theme
  return <button className={className}>{children}</button>
}
const CurrentUserCtx = createContext(null)

function LoginButton() {
  const { currUser, setCurrUser } = useContext(CurrentUserCtx)
  if (currUser !== null) {
    return <p> {currUser.name} </p>
  }

  return (
    <button
      onClick={() => {
        setCurrUser({ name: 'advika' })
      }}
    >
      log
    </button>
  )
}

function MyApp() {
  const [currUser, setCurrUser] = useState(null)
  return (
    <CurrentUserCtx.Provider value={{ currUser, setCurrUser }}>
      <LoginButton></LoginButton>
    </CurrentUserCtx.Provider>
  )
}

createRoot(d).render(<MyApp />)
