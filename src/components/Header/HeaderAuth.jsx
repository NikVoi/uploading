import { DASHBOARD_PAGE } from '@/constants/navigateConstant'
import useLogOut from '@/hooks/auth/useLogOut'
import { IoVideocamOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button/Button'
import styles from './Header.module.scss'

const HeaderAuth = () => {
	const handleLogout = useLogOut()
	const navigate = useNavigate()

	const email = localStorage.getItem('email')

	return (
		<section className={styles.headerAuth}>
			<h1 className={styles.logo} onClick={() => navigate(DASHBOARD_PAGE)}>
				<IoVideocamOutline />
				<span>Transcribe</span>
			</h1>
			<div className={styles.wrapper}>
				<h2>{email}</h2>

				<Button text={'Logout'} onClick={handleLogout} />
			</div>
		</section>
	)
}

export default HeaderAuth
