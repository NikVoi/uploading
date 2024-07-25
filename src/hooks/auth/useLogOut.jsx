import { useNavigate } from 'react-router-dom'

const { VITE_NAV_MAIN } = import.meta.env

const useLogOut = () => {
	const navigate = useNavigate()

	// TODO: Подумать над тем чтобы вынести это в helper
	const getAuthToken = () => {
		return localStorage.getItem('authToken')
	}

	const token = getAuthToken()

	const handleLogout = () => {
		localStorage.removeItem('authToken')
		localStorage.removeItem('email')

		navigate(VITE_NAV_MAIN)
	}

	return handleLogout
}

export default useLogOut
