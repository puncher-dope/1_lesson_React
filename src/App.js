
import React, { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
	const [count, setCount] = useState(0)
	const [now, setNow] = useState(new Date()) //new Date() декларативный
	setTimeout(() => {
		setNow(new Date)
	}, 1000)

	function handleClick() {
		setCount((count) => count + 1)
	}

	const timer = now.toLocaleDateString()


	return createElement(React.Fragment, null,
		createElement('div', null,
			createElement('a', { href: "https://vite.dev", target: "_blank" },
				createElement('img', { src: '/vite.svg', className: "logo", alt: "Vite logo" })
			),
			createElement('a', { href: "https://react.dev", target: "_blank" },
				createElement('img', { src: '/src/assets/react.svg', className: "logo react", alt: "React logo" })
			)
		),
		createElement('h1', null, 'Vite + React'),
		createElement('div', { className: "card" },
			createElement('button', { onClick: handleClick }, `count is ${count}`),
			createElement('p', null,
				'Edit',
				createElement('code', null, 'src/App.jsx')),
			' and save to test HMR'
		),
		createElement('div', null, `Время сейчас: ${timer}`),
		createElement('p', { className: "read-the-docs" }, 'Click on the Vite and React logos to learn more')

	)
}
export default App
