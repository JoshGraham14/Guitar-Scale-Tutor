import './Info.css'

export const Info = () => {
	return (
		<div className='info-container'>
			<h1>How does this work?</h1>
			<p>
				Simply select a note (the tonic for the music theorists) as well
				as the type of scale you would like to see. If you're interested
				in seeing all of the scales associated with a specific note,
				there is an "all" option at the bottom of the dropdown menu.
			</p>
			<br />
			<h1>How do I read the scale?</h1>
			<p>It is assumed that your guitar is in standard tuning.</p>
			<p>
				From top to bottom, the strings in the diagram are: e, B, G, D,
				A, E (Note the lower-case 'e' representing the high E string)
			</p>
			<p>
				The black and blue circles represent the notes of the scale,
				blue is for the tonic.
			</p>
			<p>
				The numbers in the circles denote the scale degrees. For
				example, if you select a major scale, the interval between the
				circles labelled 1 and 3 will be a major third.
			</p>
			<br />
			<h1>Will more scales be added?</h1>
			<p>
				Yes! In the future new scales will be added such as blues,
				harmonic & melodic minor, as well as modes of the major and
				minor scales.
			</p>
			<p>
				As this is just a personal project, there is no exact timeline
				for when new scales will added. It depends on how much freetime
				I have, as well as what I'm currently interested in and playing.
			</p>
			<center>
				<p>Have fun learning!</p>
			</center>
		</div>
	)
}
