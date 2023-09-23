import { useState } from 'react'
import Select from 'react-select'

import './App.css'
import { Scale } from './components/Scale'
import { Option, noteOptions, scaleTypeOptions } from './data'

function App() {
	const [scale, setScale] = useState<string>('')
	const [note, setNote] = useState<string>('')
	const [noteTitle, setNoteTitle] = useState<string>('')
	const [scaleTitle, setScaleTitle] = useState<string>('')

	const onNoteChange = (option: Option | null): void => {
		if (option !== null) {
			setNote(option.value)
			setNoteTitle(option.label)
		}
	}

	const onScaleChange = (option: Option | null): void => {
		if (option !== null) {
			setScale(option.value)
			setScaleTitle(option.label)
		}
	}

	return (
		<>
			<header>
				<h1>Guitar Scales</h1>
			</header>
			<section>
				<div className='options-container'>
					<span className='option'>
						<label htmlFor='note-select'>Note: </label>
						<Select
							id='note-select'
							options={noteOptions}
							onChange={onNoteChange}
							styles={{
								control: baseStyles => ({
									...baseStyles,
									width: '10rem',
									'&:hover': {
										cursor: 'pointer',
									},
								}),
							}}
						/>
					</span>
					<span className='option'>
						<label htmlFor='scale-select'>Scale Type: </label>
						<Select
							id='scale-select'
							options={scaleTypeOptions}
							onChange={onScaleChange}
							styles={{
								control: baseStyles => ({
									...baseStyles,
									width: '15rem',
									'&:hover': {
										cursor: 'pointer',
									},
								}),
							}}
						/>
					</span>
				</div>
				<div className='scales-container'>
					{scale == 'All' ? (
						scaleTypeOptions.map((option: Option) => {
							if (option.label !== 'All')
								return (
									<Scale
										note={note}
										scaleType={option.value}
										noteTitle={noteTitle}
										scaleTitle={scaleTitle}
										key={`${note} ${option.value}`}
									/>
								)
						})
					) : note !== '' && scale !== '' ? (
						<Scale
							note={note}
							scaleType={scale}
							noteTitle={noteTitle}
							scaleTitle={scaleTitle}
						/>
					) : (
						''
					)}
				</div>
			</section>
		</>
	)
}

export default App
