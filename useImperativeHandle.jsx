import { forwardRef, useImperativeHandle, useRef } from 'react'
import { createRoot } from 'react-dom/client'

const d = document.getElementById('root')

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null)
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus()
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView()
        }
      }
    },
    []
  )
  return <input {...props} ref={inputRef}></input>
})

function Form() {
  const ref = useRef(null)

  function handleClick() {
    ref.current.focus()
  }

  return (
    <form>
      <MyInput label='enter you name' ref={ref}></MyInput>
      <button type='button' onClick={handleClick}>
        is edit
      </button>
    </form>
  )
}

createRoot(d).render(<Form />)
