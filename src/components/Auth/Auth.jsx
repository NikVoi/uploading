import { AUTH_PAGE } from '@/constants/navigateConstant'
import useNavigateAuth from '@/hooks/useNavigateAuth'
import { useState } from 'react'
import LogIn from '../LogIn/LogIn'
import SingIn from '../SingIn/SingIn'
import styles from './Auth.module.scss'

const Auth = () => {
	const [auth, setAuth] = useState('login')
	useNavigateAuth('', AUTH_PAGE)

	return (
		<section className={styles.auth}>
			<div className={styles.forms}>
				{auth === 'login' && <LogIn setAuth={setAuth} />}
				{auth === 'signin' && <SingIn setAuth={setAuth} />}
			</div>
		</section>
	)
}

export default Auth
