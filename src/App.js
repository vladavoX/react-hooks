import { useEffect, useRef, useState } from 'react'

import { useForm } from './useForm'

import { Hello } from './Hello'
import { useFetch } from './useFetch'

const App = () => {
  // const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 })
  // const [count, setCount] = useState(10)
  // const [count2, setCount2] = useState(20)

  // return (
  //   <div>
  //     <button
  //       onClick={() =>
  //         setCount((currentState) => ({
  //           ...currentState,
  //           count: currentState.count + 1
  //         }))
  //       }
  //     >
  //       +
  //     </button>
  //     {/* <button onClick={() => {
  //         setCount(c => c + 1)
  //         setCount2(c => c + 1)
  //       }}>+</button> */}
  //     <div>count 1: {count}</div>
  //     <div>count 2: {count2}</div>
  //   </div>
  // )

  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: ''
  })

  const [showHello, setShowHello] = useState(true)
  const inputRef = useRef()
  const hello = useRef(() => console.log('hello world'))

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [values.email])

  return (
    <div>
      <button onClick={() => setShowHello((prev) => !prev)}>Toggle</button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        name='email'
        value={values.email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        name='firstName'
        value={values.firstName}
        onChange={handleChange}
        placeholder='First name'
      />
      <input
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <button
        onClick={() => {
          inputRef.current.focus()
          hello.current()
        }}
      >
        Focus
      </button>
    </div>
  )
}

export default App
