import { AUTH_PAGE } from '@/constants/navigateConstant'
import { LOGIN, SING_IN } from '@/constants/stringConstant'
import useNavigateAuth from '@/hooks/useNavigateAuth'
import { useState } from 'react'
import LogIn from '../LogIn/LogIn'
import SingIn from '../SingIn/SingIn'
import styles from './Auth.module.scss'

const Auth = () => {
	const [auth, setAuth] = useState(LOGIN)
	useNavigateAuth('', AUTH_PAGE)

	return (
		<section className={styles.auth}>
			<div className={styles.forms}>
				{auth === `${LOGIN}` && <LogIn setAuth={setAuth} />}
				{auth === `${SING_IN}` && <SingIn setAuth={setAuth} />}
			</div>
		</section>
	)
}

export default Auth
