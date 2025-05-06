
import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'

function App() {
	const [count, setCount] = useState(0)
	const [now, setNow] = useState(new Date()) //new Date() декларативный
	setTimeout(() => {
		setNow(new Date)
	}, 1000)

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className={styles.card}>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>

				<div>Время сейчас: {now.toLocaleDateString()}</div>

				{/* toLocaleDateString() декларативный */}



			</div>
			<p className={styles.readTheDocs}>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}
export default App
