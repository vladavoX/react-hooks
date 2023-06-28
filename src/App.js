import { useMemo, useState } from 'react'

import { useFetch } from './useFetch'

const computeLongestWord = arr => {
	if (!arr) return []

	console.log('computing longest word')

	let longestWord = ''
	arr.forEach(sentence =>
		sentence.body.split(' ').forEach(word => {
			if (word.length > longestWord.length) longestWord = word
		})
	)

	return longestWord
}

const App = () => {
	const [count, setCount] = useState(0)
	const { data } = useFetch('https://jsonplaceholder.typicode.com/comments')

	const longestWord = useMemo(() => computeLongestWord(data), [data])

	return (
		<div>
			<div>count: {count}</div>
			<button onClick={() => setCount(c => c + 1)}>increment</button>
			<div>{longestWord}</div>
		</div>
	)
}

export default App
