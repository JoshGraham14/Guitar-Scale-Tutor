import './App.css'
import { Scale } from './components/Scale'

function App() {
	return (
		<>
			<header>
				<h1>Guitar Scales</h1>
			</header>
			<Scale note='G' scaleType='Major' />
		</>
	)
}

export default App
