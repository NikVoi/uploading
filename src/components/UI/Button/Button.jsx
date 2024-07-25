import styles from './Button.module.scss'

const Button = ({ text, onClick, svg, disabled }) => {
	return (
		<button className={styles.button} onClick={onClick} disabled={disabled}>
			{svg} {text}
		</button>
	)
}

export default Button
