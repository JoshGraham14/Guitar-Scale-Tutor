import './App.css'
import { Scale } from './components/Scale'
import Select from 'react-select'

import { useState } from 'react'

type Option = {
	value: string
	label: string
}

function App() {
	const [scale, setScale] = useState<string>('')
	const [note, setNote] = useState<string>('')
	const [scaleTitle, setScaleTitle] = useState<string>('')

	const noteOptions: Option[] = [
		{ value: 'C', label: 'C' },
		{ value: 'Db', label: 'C#/Db' },
		{ value: 'D', label: 'D' },
		{ value: 'Eb', label: 'D#/Eb' },
		{ value: 'E', label: 'E' },
		{ value: 'F', label: 'F' },
		{ value: 'Gb', label: 'F#/Gb' },
		{ value: 'G', label: 'G' },
		{ value: 'Ab', label: 'G#/Ab' },
		{ value: 'A', label: 'A' },
		{ value: 'Bb', label: 'A#/Bb' },
		{ value: 'B', label: 'B' },
	]

	const scaleTypeOptions: Option[] = [
		{ value: 'Major', label: 'Major' },
		{ value: 'Minor', label: 'Minor' },
	]

	const onNoteChange = (option: Option | null): void => {
		if (option !== null) {
			setNote(option.value)
			setScaleTitle(option.label)
		}
	}

	const onScaleChange = (option: Option | null): void => {
		if (option !== null) {
			setScale(option.value)
		}
	}

	return (
		<>
			<header>
				<h1>Guitar Scales</h1>
			</header>

			<span>
				<Select
					options={noteOptions}
					onChange={onNoteChange}
					styles={{
						control: baseStyles => ({
							...baseStyles,
							width: '10rem',
						}),
					}}
				/>
				<Select
					options={scaleTypeOptions}
					onChange={onScaleChange}
					styles={{
						control: baseStyles => ({
							...baseStyles,
							width: '10rem',
						}),
					}}
				/>
			</span>
			<Scale note={note} scaleType={scale} scaleTitle={scaleTitle} />
		</>
	)
}

export default App
