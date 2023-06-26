import { useRef, useState, useEffect } from 'react'

import { useFetch } from './useFetch'

export const Hello = () => {
  // const renders = useRef(0)
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem('count'))
  )
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count))
  }, [count])

  // console.log('hello renders', renders.current++)

  return (
    <div>
      <div>{!data ? 'loading...' : <p>{data}</p>}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  )
}
