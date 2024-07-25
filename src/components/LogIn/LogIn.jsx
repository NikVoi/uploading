import { useCallback } from 'react'
import useLogIn from '../../hooks/auth/useLogIn'
import useUserData from '../../hooks/auth/useUserData'
import CustomAlert from '../CustomAlert/CustomAlert'
import Form from '../Form/Form'
import Button from '../UI/Button/Button'
import LoaderButton from '../UI/Loader/Loader'
import styles from './LogIn.module.scss'

const LogIn = ({ setAuth }) => {
	const setAuthPage = useCallback(() => {
		setAuth('signin')
	}, [setAuth])

	const [userData, updateUserData] = useUserData()
	const { handleLogin, isLoading } = useLogIn({
		userData,
		updateUserData,
	})

	return (
		<section className={styles.logIn}>
			<CustomAlert data={userData} setData={updateUserData} />

			<h1>Log in</h1>

			<Form userData={userData} updateUserData={updateUserData} />

			<Button
				text={isLoading ? `Process...` : 'Log in'}
				svg={isLoading ? <LoaderButton /> : ''}
				onClick={handleLogin}
				disabled={isLoading}
			/>

			<h4>
				Don't have an account?{' '}
				<span className={styles.link} onClick={setAuthPage}>
					Sign up
				</span>
			</h4>
		</section>
	)
}

export default LogIn
