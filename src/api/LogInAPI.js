import axios from 'axios'

const { VITE_BASE_URL_MOCK } = import.meta.env

export const loginUser = async (email, password) => {
	try {
		const response = await axios.post(
			`${VITE_BASE_URL_MOCK}/users/sign-in/`,
			{
				email,
				password,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		)

		return response.data
	} catch (error) {
		throw new Error('Login failed')
	}
}
