import { useCallback, useEffect, useState } from 'react'
import Hello from './Hello'
import Square from './Square'

const App = () => {
	const [count, setCount] = useState(0)
	const favoriteNums = [5, 45, 65]

	const increment = useCallback(
		n => {
			setCount(c => c + n)
		},
		[setCount]
	)

	return (
		<div>
			<Hello increment={increment} />
			<div>count: {count}</div>
			{favoriteNums.map(n => (
				<Square
					increment={increment}
					key={n}
					n={n}
				/>
			))}
		</div>
	)
}

export default App
