import { IoCloudUploadSharp } from 'react-icons/io5'
import useLogOut from '../../hooks/auth/useLogOut'
import Button from '../UI/Button/Button'
import styles from './Header.module.scss'

const Header = () => {
	const handleLogout = useLogOut()

	const getAuthToken = () => {
		return localStorage.getItem('authToken')
	}

	const email = localStorage.getItem('email')

	return (
		<section className={styles.header}>
			<h className={styles.logo}>
				<IoCloudUploadSharp />
				<span>Uploaders</span>
			</h>
			<div className={styles.wrapper}>
				<h2>{email}</h2>

				<Button text={'Logout'} onClick={handleLogout} />
			</div>
		</section>
	)
}

export default Header
