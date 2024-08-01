import styles from './Features.module.scss'

const key_Features = [
	{
		title: 'Automated Transcription',
		description:
			'Upload your videos and let our AI engine do the rest, delivering accurate transcripts in minutes.',
	},
	{
		title: 'Searchable Transcripts',
		description:
			'Your transcripts are fully searchable, making it easy to find specific moments in your videos.',
	},
	{
		title: 'Editing and Formatting',
		description:
			'Edit your transcripts directly in the app and format them for easy sharing and collaboration.',
	},
	{
		title: 'Multiple Output Formats',
		description:
			'Download your transcripts in a variety of formats, including text, SRT, and VTT.',
	},
	{
		title: 'Team Collaboration',
		description:
			'Invite your team to review and edit transcripts, and track changes in real-time.',
	},
	{
		title: 'Secure and Reliable',
		description:
			'Your videos and transcripts are stored securely, with enterprise-grade encryption and backup.',
	},
]

const Features = () => {
	return (
		<section className={styles.features}>
			<h4>Key Features</h4>

			<h2>Powerful transcription tools</h2>

			<h3>
				Our AI-powered transcription engine delivers accurate, searchable text
				from your videos in minutes.
			</h3>

			<div className={styles.wrapper}>
				{key_Features.map(item => (
					<div className={styles.item}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.description}>{item.description}</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Features
