export interface Option {
	value: string
	label: string
}

export const noteOptions: Option[] = [
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

export const scaleTypeOptions: Option[] = [
	{ value: 'Major', label: 'Major' },
	{ value: 'Minor', label: 'Minor' },
]
