import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true })

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }))
    const fetchFunc = async () => {
      const x = await fetch(url)
      const y = await x.text()
      setState({ data: y, loading: false })
    }

    fetchFunc()
  }, [url, setState])

  return state
}
