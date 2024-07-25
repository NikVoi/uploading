import { useState } from 'react'

const useUserData = () => {
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
		isActive: '',
	})

	const updateUserData = data => {
		setUserData(prevState => ({ ...prevState, ...data }))
	}

	return [userData, updateUserData]
}

export default useUserData
