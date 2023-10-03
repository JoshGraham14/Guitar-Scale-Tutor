import { useState } from 'react'
import Select from 'react-select'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import './App.css'
import { Scale } from './components/Scale/Scale'
import { Option, noteOptions, scaleTypeOptions } from './data'
import { Info } from './components/Info/Info'

function App() {
	const [scale, setScale] = useState<string>('')
	const [note, setNote] = useState<string>('')
	const [noteTitle, setNoteTitle] = useState<string>('')
	const [scaleTitle, setScaleTitle] = useState<string>('')
	const [showInfo, setShowInfo] = useState<boolean>(true)

	const onNoteChange = (option: Option | null): void => {
		if (option !== null) {
			setNote(option.value)
			setNoteTitle(option.label)
			// ensure the info is hidden if a new note has been selected
			// (only if a scale is already being displayed)
			if (scale !== '') {
				setShowInfo(false)
			}
		}
	}

	const onScaleChange = (option: Option | null): void => {
		if (option !== null) {
			setScale(option.value)
			setScaleTitle(option.label)
			// ensure the info is hidden if a new scale has been selected
			// (only if a scale is already being displayed)
			if (note !== '') {
				setShowInfo(false)
			}
		}
	}

	const onInfoChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setShowInfo(e.target.checked)
	}

	return (
		<>
			<header>
				<h1 className='title'>Guitar Scales</h1>
			</header>
			<section>
				<form className='options-container'>
					<span className='option'>
						<label htmlFor='note-select'>Note: </label>
						<Select
							inputId={'note-select'}
							id='note-select-box'
							options={noteOptions}
							onChange={onNoteChange}
							styles={{
								control: baseStyles => ({
									...baseStyles,
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
							inputId={'scale-select'}
							id='scale-select-box'
							options={scaleTypeOptions}
							onChange={onScaleChange}
							styles={{
								control: baseStyles => ({
									...baseStyles,
									'&:hover': {
										cursor: 'pointer',
									},
								}),
							}}
						/>
					</span>
					<span className='option'>
						<label htmlFor='info-toggle'>Show Info: </label>
						<Toggle
							id='info-toggle'
							checked={showInfo}
							onChange={onInfoChange}
						/>
					</span>
				</form>
				<div className='scales-container'>
					{showInfo ? (
						<Info />
					) : scale == 'All' ? (
						scaleTypeOptions.map((option: Option) => {
							if (option.label !== 'All')
								return (
									<Scale
										note={note}
										scaleType={option.value}
										noteTitle={noteTitle}
										scaleTitle={option.label}
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
