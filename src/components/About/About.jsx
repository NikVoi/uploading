import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import styles from './About.module.scss'

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.info}>
				<Title
					title={'Convert videos to text transcripts'}
					description={
						'Our powerful AI-powered transcription tool makes it easy to convert your videos into searchable, editable text.'
					}
				/>

				<div className={styles.buttons}>
					<Button text={'Try in now'} onClick={() => navigate(AUTH_PAGE)} />
					<Button text={'Pricing'} onClick={() => navigate(AUTH_PAGE)} />
				</div>
			</div>

			<div className={styles.image}>
				<img src='/placeholder.svg' />
			</div>
		</section>
	)
}

export default About
