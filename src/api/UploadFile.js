import axios from 'axios'

const { VITE_BASE_URL_MOCK } = import.meta.env

export const uploadFile = async file => {
	const formData = new FormData()
	formData.append('file', file)

	try {
		const response = await axios.post(
			`${VITE_BASE_URL_MOCK}/upload/file`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			}
		)

		return response.data
	} catch (error) {
		throw new Error('File upload failed')
	}
}
