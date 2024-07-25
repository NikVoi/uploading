import React, { memo } from 'react'
import Input from '../UI/Input/Input'

const FormSingUp = memo(({ userData, updateUserData }) => {
	const handleInputChange = event => {
		const { name, value } = event.target
		updateUserData({ [name]: value })
	}

	return (
		<section>
			<Input
				label={'First name'}
				name='firstName'
				value={userData.firstName}
				onChange={handleInputChange}
				placeholder={'Enter your first name'}
			/>

			<Input
				label={'User name'}
				name='userName'
				value={userData.userName}
				onChange={handleInputChange}
				placeholder={'Enter your name'}
			/>

			<Input
				label={'Email'}
				name='email'
				value={userData.email}
				onChange={handleInputChange}
				placeholder={'Enter your email'}
			/>

			<Input
				label={'Password'}
				type={'password'}
				name='password'
				value={userData.password}
				onChange={handleInputChange}
				placeholder={'Enter your password'}
			/>
		</section>
	)
})

export default FormSingUp
