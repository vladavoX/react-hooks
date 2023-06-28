import React from 'react'
// import { useCountRenders } from './useCountRenders'

const Hello = React.memo(({ increment }) => {
	// useCountRenders()

	return <button onClick={() => increment(5)}>hello</button>
})

export default Hello
