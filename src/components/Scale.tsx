import { useState, useEffect } from 'react'

type Props = {
	note: string
	scaleType: string
	scaleTitle: string
}

export const Scale = (props: Props) => {
	const [scale, setScale] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string>('')

	const { note, scaleType, scaleTitle } = props

	useEffect(() => {
		import(`../assets/scales/${note}_${scaleType}.svg`)
			.then(module => {
				setScale(module.default)
				setErrorMessage('')
			})
			.catch(() => {
				setErrorMessage('Scale was not found.')
			})
	}, [note, scaleType])

	return errorMessage === '' ? (
		<div>
			<h1>
				{scaleTitle === '' || scaleType === ''
					? ''
					: `${scaleTitle} ${scaleType}`}
			</h1>
			<img src={scale}></img>
		</div>
	) : (
		<h3>{errorMessage}</h3>
	)
}
