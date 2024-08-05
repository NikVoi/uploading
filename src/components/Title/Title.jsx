import styles from './Title.module.scss'

const Title = ({ title, description }) => {
	return (
		<div className={styles.title}>
			<h2>{title}</h2>
			<h3>{description}</h3>
		</div>
	)
}

export default Title
