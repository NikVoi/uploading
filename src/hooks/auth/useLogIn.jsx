import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/LogInAPI'

const { VITE_NAV_DASHBOARD } = import.meta.env

const useLogIn = ({ userData, updateUserData }) => {
	const [isLoading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	const handleLogin = async () => {
		const { email, password } = userData
		setIsLoading(true)

		const validateEmail = email => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(email)
		}

		if (!validateEmail(email)) {
			updateUserData({
				error: 'Invalid email address',
				typeAlert: 'Error',
				message: 'Invalid email address',
				isActive: true,
			})
			setIsLoading(false)
			return
		}

		if (password.length <= 3) {
			updateUserData({
				typeAlert: 'Error',
				message: 'Password must be longer than 3 characters',
				isActive: true,
			})
			setIsLoading(false)
			return
		}

		try {
			const response = await loginUser(email, password)
			localStorage.setItem('email', email)
			localStorage.setItem('authToken', response.access_token)
			setIsLoading(false)
			navigate(VITE_NAV_DASHBOARD)
		} catch (error) {
			console.error('Error logging in:', error)
			console.log(error)
		}
	}

	return {
		handleLogin,
		isLoading,
	}
}

export default useLogIn
