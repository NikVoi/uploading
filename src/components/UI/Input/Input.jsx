import styles from './Input.module.scss'

const Input = ({
	label,
	type = 'text',
	name,
	value,
	placeholder,
	onChange,
}) => {
	return (
		<div className={styles.block}>
			<label className={styles.label}>{label}</label>

			<input
				className={styles.input}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
		</div>
	)
}

export default Input
