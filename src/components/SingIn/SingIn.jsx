import useSingUp from '../../hooks/auth/useSingUp'
import useUserData from '../../hooks/auth/useUserData'
import CustomAlert from '../CustomAlert/CustomAlert'
import FormSingUp from '../FormSingUp/FormSingUp'
import Button from '../UI/Button/Button'
import LoaderButton from '../UI/Loader/Loader'
import styles from './SingIn.module.scss'

const SingIn = ({ setAuth }) => {
	const setAuthPage = useCallback(() => {
		setAuth('login')
	}, [setAuth])

	const [userData, updateUserData] = useUserData()
	const { handleSingUp, isLoading } = useSingUp({
		userData,
		updateUserData,
	})

	return (
		<section className={styles.singIn}>
			<CustomAlert data={userData} setData={updateUserData} />

			<h1>Sing in</h1>

			<FormSingUp userData={userData} updateUserData={updateUserData} />

			<Button
				text={isLoading ? `Process...` : 'Sing up'}
				svg={isLoading ? <LoaderButton /> : ''}
				onClick={handleSingUp}
				disabled={isLoading}
			/>

			<h4>
				Have account?{' '}
				<span className={styles.link} onClick={setAuthPage}>
					Log in
				</span>
			</h4>
		</section>
	)
}

export default SingIn
