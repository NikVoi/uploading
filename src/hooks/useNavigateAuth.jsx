import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const { VITE_NAV_MAIN, VITE_NAV_DASHBOARD } = import.meta.env

const useNavigateAuth = (
	withToken = VITE_NAV_DASHBOARD,
	WithOutToken = VITE_NAV_MAIN
) => {
	const navigate = useNavigate()
	const token = localStorage.getItem('authToken')

	useEffect(() => {
		if (token) {
			navigate(withToken)
		} else {
			navigate(WithOutToken)
		}
	}, [token, navigate, withToken, WithOutToken])

	return token
}

export default useNavigateAuth
