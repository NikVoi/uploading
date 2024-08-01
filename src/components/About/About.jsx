import Button from '../UI/Button/Button'
import styles from './About.module.scss'

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.info}>
				<div>
					<h2>Convert videos to text transcripts</h2>
					<h3>
						Our powerful AI-powered transcription tool makes it easy to convert
						your videos into searchable, editable text.
					</h3>
				</div>

				<div className={styles.buttons}>
					<Button text={'Try in now'} />
					<Button text={'Pricing'} />
				</div>
			</div>

			<div className={styles.image}>
				<img src='/placeholder.svg' />
			</div>
		</section>
	)
}

export default About
