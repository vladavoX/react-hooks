import { useEffect, useState } from 'react'

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

  // const [showHello, setShowHello] = useState(true)

  // useEffect(() => {
  //   const onMouseMove = (e) => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove', onMouseMove)

  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove)
  //   }
  // }, [values.email])

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  )
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  return (
    <div>
      <div>{!data ? 'loading...' : <p>{data}</p>}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {/* <button onClick={() => setShowHello((prev) => !prev)}>Toggle</button> */}
      {/* {showHello && <Hello />} */}
      <input
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
    </div>
  )
}

export default App
