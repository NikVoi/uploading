import axios from 'axios'

const { VITE_BASE_URL_MOCK } = import.meta.env

export const singUpUser = async (email, password) => {
	try {
		const response = await axios.post(
			`${VITE_BASE_URL_MOCK}/users/sign-up/`,
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
		throw new Error('Registration failed')
	}
}
