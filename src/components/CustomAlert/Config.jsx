import styles from './CustomAlert.module.scss'

import { BiShieldX } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa6'

export const getIcon = type => {
	switch (type) {
		case 'Success':
			return <FaCheck className={styles.success} />
		case 'Error':
			return <BiShieldX eldX className={styles.error} />
		default:
			return null
	}
}
