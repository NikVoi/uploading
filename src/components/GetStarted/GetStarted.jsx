import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './GetStarted.module.scss'

const GetStarted = () => {
	return (
		<section className={styles.getStarted}>
			<Title
				title={'Get started with Transcribe'}
				description={
					'Upload your first video and let our AI-powered transcription engine do the rest.'
				}
			/>

			<div className={styles.wrapper}>
				<Input type='file' label={'Upload Video'} />
				<Button text={'Transcribe Video'} />
			</div>
		</section>
	)
}

export default GetStarted
