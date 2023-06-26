import { useForm } from './useForm'

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

  const [values, handleChange] = useForm({ email: '', password: '' })

  return (
    <div>
      <input
        name='email'
        value={values.email}
        onChange={handleChange}
      />
      <input
        name='password'
        type='password'
        value={values.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default App
