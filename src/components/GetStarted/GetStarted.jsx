import {
	GET_STARTED_BUTTON,
	GET_STARTED_DESCRIPTION,
	GET_STARTED_LABEL,
	GET_STARTED_TITLE,
} from '@/constants/Home/getStartedConstants'
import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import styles from './GetStarted.module.scss'

const GetStarted = () => {
	return (
		<section className={styles.getStarted}>
			<Title title={GET_STARTED_TITLE} description={GET_STARTED_DESCRIPTION} />

			<div className={styles.wrapper}>
				<Input type='file' label={GET_STARTED_LABEL} />
				<Button text={GET_STARTED_BUTTON} />
			</div>
		</section>
	)
}

export default GetStarted
