import { useState, useEffect } from 'react'
import './Scale.css'

type Props = {
	note: string
	scaleType: string
	noteTitle: string
	scaleTitle: string
}

export const Scale = (props: Props) => {
	const [scale, setScale] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')

	const { note, scaleType, noteTitle, scaleTitle } = props

	useEffect(() => {
		import(`../../assets/scales/${note}_${scaleType}.svg`)
			.then(module => {
				setScale(module.default)
				setErrorMessage('')
			})
			.catch(() => {
				setErrorMessage('Scale was not found.')
			})
	}, [note, scaleType])

	return errorMessage === '' ? (
		<div className='scale-wrapper'>
			<h1>
				{noteTitle === '' || scaleType === ''
					? ''
					: `${noteTitle} ${scaleTitle}`}
			</h1>
			<img className='scale-svg' src={scale}></img>
		</div>
	) : (
		<h3>{errorMessage}</h3>
	)
}
