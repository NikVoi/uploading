import { useState } from 'react'
import { singUpUser } from '../../api/SingUp'

const useSingUp = ({ userData, updateUserData }) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleSingUp = async () => {
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
			const response = await singUpUser(email, password)
			setIsLoading(false)
			updateUserData({
				email: '',
				password: '',
				typeAlert: 'Success',
				message: 'Account registered',
				isActive: true,
			})
		} catch (error) {
			console.error('Error sing up:', error)
		}
	}

	return {
		handleSingUp,
		isLoading,
	}
}

export default useSingUp
