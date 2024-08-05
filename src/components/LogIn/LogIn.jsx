import { AUTH_TEXT } from '@/constants/Auth/authConstant'
import { LOG_IN, PROCESS, SING_IN, SING_UP } from '@/constants/stringConstant'
import useLogIn from '@/hooks/auth/useLogIn'
import useUserData from '@hooks/auth/useUserData'
import { useCallback } from 'react'
import CustomAlert from '../CustomAlert/CustomAlert'
import Form from '../Form/Form'
import Button from '../UI/Button/Button'
import LoaderButton from '../UI/Loader/Loader'
import styles from './LogIn.module.scss'

const LogIn = ({ setAuth }) => {
	const setAuthPage = useCallback(() => {
		setAuth(SING_IN)
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
				text={isLoading ? PROCESS : LOG_IN}
				svg={isLoading ? <LoaderButton /> : ''}
				onClick={handleLogin}
				disabled={isLoading}
			/>

			<h4>
				{AUTH_TEXT}{' '}
				<span className={styles.link} onClick={setAuthPage}>
					{SING_UP}
				</span>
			</h4>
		</section>
	)
}

export default LogIn
