import { useState } from 'react'
import { singUpUser } from '../../api/SingUp'

const useSingUp = ({ userData, updateUserData }) => {
	const [isLoading, setIsLoading] = useState(false)

	const handleSingUp = async () => {
		const { email, password, firstName } = userData
		setIsLoading(true)

		const validateEmail = email => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
			return emailRegex.test(email)
		}

		if (!firstName) {
			updateUserData({
				typeAlert: 'Error',
				message: 'First name is required',
				isActive: true,
			})
			setIsLoading(false)
			return
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
				firstName: '',
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
