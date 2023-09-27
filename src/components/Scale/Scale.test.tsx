import { render, screen } from '@testing-library/react'
import { Scale } from './Scale'

test('renders correctly', () => {
	render(
		<Scale note='G' scaleType='Major' noteTitle='G' scaleTitle='Major' />
	)
	const scaleName1 = screen.getByText('G Major')
	expect(scaleName1).toBeInTheDocument()

	render(
		<Scale
			note='Eb'
			scaleType='Minor_Pentatonic'
			noteTitle='D#/Eb'
			scaleTitle='Minor Pentatonic'
		/>
	)

	const scaleName2 = screen.getByText('D#/Eb Minor Pentatonic')
	expect(scaleName2).toBeInTheDocument()

	render(
		<Scale note='B' scaleType='Minor' noteTitle='B' scaleTitle='Minor' />
	)
	const scaleName3 = screen.getByText('B Minor')
	expect(scaleName3).toBeInTheDocument()

	render(
		<Scale
			note='Ab'
			scaleType='Major_Pentatonic'
			noteTitle='G#/Ab'
			scaleTitle='Major Pentatonic'
		/>
	)

	const scaleName4 = screen.getByText('G#/Ab Major Pentatonic')
	expect(scaleName4).toBeInTheDocument()
})
