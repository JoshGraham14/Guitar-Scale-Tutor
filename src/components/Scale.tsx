import { useState } from 'react'

type Props = {
	note: string
	scaleType: string
}

export const Scale = (props: Props) => {
	const [scale, setScale] = useState<string>('')

	const { note, scaleType } = props

	import(`../assets/${note}_${scaleType}.svg`).then(module => {
		setScale(module.default)
	})

	return (
		<div>
			<h1>
				{note} {scaleType}
			</h1>
			<img src={scale}></img>
		</div>
	)
}
