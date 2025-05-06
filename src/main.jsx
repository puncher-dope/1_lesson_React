import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1 from './Task1/Task_1.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Task1 />
	</StrictMode>,
)
