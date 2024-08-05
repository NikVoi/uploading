import { AUTH_TEXT_2 } from '@/constants/Auth/authConstant'
import {
	LOG_IN,
	LOGIN,
	PROCESS,
	SING_IN_UPPER,
} from '@/constants/stringConstant'
import { useCallback } from 'react'
import useSingUp from '../../hooks/auth/useSingUp'
import useUserData from '../../hooks/auth/useUserData'
import CustomAlert from '../CustomAlert/CustomAlert'
import FormSingUp from '../FormSingUp/FormSingUp'
import Button from '../UI/Button/Button'
import LoaderButton from '../UI/Loader/Loader'
import styles from './SingIn.module.scss'

const SingIn = ({ setAuth }) => {
	const setAuthPage = useCallback(() => {
		setAuth(LOGIN)
	}, [setAuth])

	const [userData, updateUserData] = useUserData()
	const { handleSingUp, isLoading } = useSingUp({
		userData,
		updateUserData,
	})

	return (
		<section className={styles.singIn}>
			<CustomAlert data={userData} setData={updateUserData} />

			<h1>{SING_IN_UPPER}</h1>

			<FormSingUp userData={userData} updateUserData={updateUserData} />

			<Button
				text={isLoading ? `${PROCESS}` : `${SING_IN_UPPER}`}
				svg={isLoading ? <LoaderButton /> : ''}
				onClick={handleSingUp}
				disabled={isLoading}
			/>

			<h4>
				{AUTH_TEXT_2}{' '}
				<span className={styles.link} onClick={setAuthPage}>
					{LOG_IN}
				</span>
			</h4>
		</section>
	)
}

export default SingIn
