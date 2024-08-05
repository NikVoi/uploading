import { useState } from 'react'
import styles from './Select.module.scss'

const Select = ({ options, onSelect }) => {
	const [selectedOption, setSelectedOption] = useState('')

	const handleChange = event => {
		setSelectedOption(event.target.value)
		if (onSelect) {
			onSelect(event.target.value)
		}
	}

	return (
		<section className={styles.select}>
			<select value={selectedOption} onChange={handleChange}>
				<option value=''>Select an Language</option>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</section>
	)
}

export default Select
