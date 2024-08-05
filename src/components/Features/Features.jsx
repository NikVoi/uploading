import {
	FEATURE_DESCRIPTION,
	FEATURE_SUB_TITLE,
	FEATURE_TITLE,
	KEY_FEATURES,
} from '@/constants/Home/featureConstant'
import Title from '../Title/Title'
import styles from './Features.module.scss'

const Features = () => {
	return (
		<section className={styles.features}>
			<h4>{FEATURE_SUB_TITLE}</h4>

			<Title title={FEATURE_TITLE} description={FEATURE_DESCRIPTION} />

			<div className={styles.wrapper}>
				{KEY_FEATURES.map(item => (
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
