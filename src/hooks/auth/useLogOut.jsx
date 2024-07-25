import { useNavigate } from 'react-router-dom'

const { VITE_NAV_MAIN } = import.meta.env

const useLogOut = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		localStorage.removeItem('authToken')
		localStorage.removeItem('email')

		navigate(VITE_NAV_MAIN)
	}

	return handleLogout
}

export default useLogOut
