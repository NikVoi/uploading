import Input from '../UI/Input/Input'

const Form = ({ userData, updateUserData }) => {
	const handleInputChange = event => {
		const { name, value } = event.target
		updateUserData({ [name]: value })
	}

	return (
		<section>
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
}

export default Form
