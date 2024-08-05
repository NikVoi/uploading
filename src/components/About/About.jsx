import {
	ABOUT_BUTTON_FIRST,
	ABOUT_BUTTON_SECOND,
	ABOUT_DESCRIPTION,
	ABOUT_IMG_SRC,
	ABOUT_TITLE,
} from '@/constants/Home/aboutConstant'
import Title from '../Title/Title'
import Button from '../UI/Button/Button'
import styles from './About.module.scss'

const About = () => {
	return (
		<section className={styles.about}>
			<div className={styles.info}>
				<Title title={ABOUT_TITLE} description={ABOUT_DESCRIPTION} />

				<div className={styles.buttons}>
					<Button
						text={ABOUT_BUTTON_FIRST}
						onClick={() => navigate(AUTH_PAGE)}
					/>
					<Button
						text={ABOUT_BUTTON_SECOND}
						onClick={() => navigate(AUTH_PAGE)}
					/>
				</div>
			</div>

			<div className={styles.image}>
				<img src={ABOUT_IMG_SRC} />
			</div>
		</section>
	)
}

export default About
